import React, { useEffect, useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { AddLocation, GetLocationsService } from '../services/LocationService';
import { Form, Button } from 'react-bootstrap';
import { UpdateLocation } from '../services/LocationService';

function Map() {
    const center = useMemo(() => ({ lat: 46.7666636, lng: 23.583331 }), [])
    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    useEffect(() => {
        GetLocationsService((res) => {
            console.log(res)
            setMarkers(res.data)
        }, (err) => {
            console.log(err)
        })
    }, [])

    const onMapClick = (e) => {
        AddLocation(e.latLng.lat(), e.latLng.lng())
        window.location.reload()
    };

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBSF_sTNXu3IBPJnlpdmNe1iQcjCoA7a-o" })
    return (isLoaded && (
        <>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName='map-container'
                onClick={onMapClick}

            >
                {
                    markers.map((marker) => (
                        <div>
                            <Marker
                                clickable
                                title={marker.name}
                                position={{
                                    lat: marker.latitude,
                                    lng: marker.longitude
                                }}
                                onClick={() => {
                                    console.log(marker.name)
                                    setSelectedMarker(marker)
                                }}
                            />
                        </div>
                    ))
                }
                {
                    selectedMarker !== "" ? (
                        <>
                            {
                                selectedMarker.name === "" ? (
                                    <InfoWindow
                                        position={{
                                            lat: selectedMarker.latitude,
                                            lng: selectedMarker.longitude
                                        }}
                                    >
                                        <Form>
                                            <Form.Group className="mb-3" controlId="locationName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="locationStreet">
                                                <Form.Label>Street</Form.Label>
                                                <Form.Control type="text" placeholder="Enter street name" onChange={(e) => setStreet(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="locationNumber">
                                                <Form.Label>Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter street number" onChange={(e) => setNumber(e.target.value)} />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" onClick={() => {
                                                UpdateLocation(selectedMarker.id, name, street, number)
                                            }}>
                                                Submit
                                            </Button>
                                        </Form>

                                    </InfoWindow>
                                ) : (
                                    <InfoWindow
                                        position={{
                                            lat: selectedMarker.latitude,
                                            lng: selectedMarker.longitude
                                        }}
                                    >
                                        <div>
                                            <p>
                                                {selectedMarker.name}
                                            </p>
                                            <p>
                                                {selectedMarker.street} {selectedMarker.number}
                                            </p>
                                        </div>
                                    </InfoWindow>
                                )
                            }

                            {
                                selectedMarker.name !== "" && selectedMarker.street !== "" && selectedMarker.number !== "" ? (
                                    <InfoWindow
                                        position={{
                                            lat: selectedMarker.latitude,
                                            lng: selectedMarker.longitude
                                        }}
                                    >
                                        <div>
                                            <p>
                                                {selectedMarker.name}
                                            </p>
                                            <p>
                                                {selectedMarker.street}, {selectedMarker.number}
                                            </p>
                                        </div>
                                    </InfoWindow>
                                ) : (
                                    <></>
                                )
                            }
                        </>
                    ) : (
                        <></>
                        // <InfoWindow
                        //     position={{
                        //         lat: selectedMarker.latitude,
                        //         lng: selectedMarker.longitude
                        //     }}
                        // >
                        //     <div>
                        //         <h1>
                        //             {selectedMarker.name}
                        //         </h1>
                        //         <h2>
                        //             {selectedMarker.street} {selectedMarker.number}
                        //         </h2>
                        //     </div>
                        // </InfoWindow>
                    )
                }

            </GoogleMap>
        </>
    ))
}


function LocationsPage() {
    return (
        <Map />
    )
}

export default LocationsPage
