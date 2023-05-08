import React, { useEffect, useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { AddLocation, DeleteLocation, GetLocationsService } from '../services/LocationService';
import { Form, Button } from 'react-bootstrap';
import { UpdateLocation } from '../services/LocationService';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';

function Map() {
    const center = useMemo(() => ({ lat: 46.7666636, lng: 23.583331 }), [])
    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [addLocationConfirmation, setAddLocationConfirmation] = useState(false);
    const [newMarker, setNewMarker] = useState({ lat: 0, lng: 0 });
    useEffect(() => {
        GetLocationsService((res) => {
            console.log(res)
            setMarkers(res.data)
        }, (err) => {
            console.log(err)
        })
    }, [])

    const handleAddLocationConfirmationClose = () => {
        setAddLocationConfirmation(false);
    };

    const onMapClick = (e) => {
        if (localStorage.getItem("isAdmin") === "true") {
            // AddLocation(e.latLng.lat(), e.latLng.lng())
            // window.location.reload()
            setAddLocationConfirmation(true)
            setNewMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() })
        }
    };

    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY })
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
                                selectedMarker.name === "" && localStorage.getItem("isAdmin") === "true" ? (
                                    <InfoWindow
                                        position={{
                                            lat: selectedMarker.latitude,
                                            lng: selectedMarker.longitude
                                        }}
                                        onCloseClick={() => { window.location.reload() }}
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
                                            <div style={{ display: "inline-flex", gap: "10px" }}>
                                                <Button variant="primary" type="submit" onClick={() => {
                                                    UpdateLocation(selectedMarker.id, name, street, number)
                                                }}>
                                                    Submit
                                                </Button>
                                                <Button variant="danger" type="submit" onClick={() => {
                                                    DeleteLocation(selectedMarker.id)
                                                }}>
                                                    Remove
                                                </Button>
                                            </div>
                                        </Form>
                                    </InfoWindow>
                                ) : (
                                    <></>
                                )
                            }

                            {
                                selectedMarker.name !== "" && selectedMarker.street !== "" && selectedMarker.number !== "" ? (
                                    <InfoWindow
                                        position={{
                                            lat: selectedMarker.latitude,
                                            lng: selectedMarker.longitude
                                        }}
                                        onCloseClick={() => { window.location.reload() }}
                                    >
                                        <div>
                                            <div>
                                                <h5>
                                                    {selectedMarker.name}
                                                </h5>
                                                <h5>
                                                    {selectedMarker.street} {selectedMarker.number}
                                                </h5>
                                            </div>
                                            {
                                                localStorage.getItem("isAdmin") === "true" ? (
                                                    <Button variant="danger" type="submit" onClick={() => {
                                                        DeleteLocation(selectedMarker.id)
                                                    }}>
                                                        Remove
                                                    </Button>
                                                ) : (
                                                    <></>
                                                )
                                            }
                                            
                                        </div>
                                    </InfoWindow>
                                ) : (
                                    <></>
                                )
                            }
                        </>
                    ) : (
                        <></>
                    )
                }
            </GoogleMap>
            <Dialog
                open={addLocationConfirmation}
                onClose={handleAddLocationConfirmationClose}
                aria-labelledby="add-location-title"
            >
                <DialogTitle id="add-location-title">
                    {"Would you like to add a new location here?"}
                </DialogTitle>
                <DialogActions>
                    <Button variant="danger" onClick={handleAddLocationConfirmationClose}>Cancel</Button>
                    <Button variant="success"
                        onClick={() => {
                            AddLocation(newMarker.lat, newMarker.lng)
                            window.location.reload()
                        }}
                        autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    ))
}


function LocationsPage() {
    return (
        <Map />
    )
}

export default LocationsPage
