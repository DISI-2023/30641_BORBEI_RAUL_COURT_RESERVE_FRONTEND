import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TextField, FormControl, InputLabel, MenuItem, Modal, Box } from '@mui/material';
import { GetFieldsService, UpdateFieldService } from '../services/FieldService';
import { GetLocationsService } from '../services/LocationService';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import { DeleteFieldService } from '../services/FieldService';
import Form from 'react-bootstrap/Form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Autocomplete from '@mui/material/Autocomplete';
import { AddFieldService } from '../services/FieldService';
import { CreateReservation, VacanciesService } from '../services/ReservationService';
import moment from 'moment/moment';
import { Dialog, DialogTitle, DialogActions, Snackbar, Alert } from '@mui/material';

const FieldsPage = () => {
    const [fields, setFields] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [name, setName] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
    const [value, setValue] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [selectedFieldId, setSelectedFieldId] = useState("");
    const handleOpenUpdateModal = () => setOpenUpdateModal(true);
    const handleCloseUpdateModal = () => setOpenUpdateModal(false);
    const [openAddFieldModal, setOpenAddFieldModal] = React.useState(false);
    const handleOpenAddFieldModal = () => setOpenAddFieldModal(true);
    const handleCloseAddFieldModal = () => setOpenAddFieldModal(false);
    const [locationId, setLocationId] = useState("");
    const [vacancies, setVacancies] = useState([]);
    const [reservationConfirmation, setReservationConfirmation] = useState(false);
    const [selectedStartTime, setSelectedStartTime] = useState("")
    const [selectedEndTime, setSelectedEndTime] = useState("")
    const [selectedFieldName, setSelectedFieldName] = useState("")
    const [check, setCheck] = useState("")
    const [isSnackbarOpen, setIsSnackbarOpen] = useState("")
    var filtered = fields.sort(function (a, b) {
        return a.name.localeCompare(b.name)
    });

    useEffect(() => {
        GetFieldsService((res) => {
            console.log(res)
            setFields(res.data)
        }, (err) => {
            console.log(err)
        })

        GetLocationsService((res) => {
            console.log(res)
            setLocations(res.data)
        }, (err) => {
            console.log(err)
        })
    }, [])

    if (selectedLocation !== "") {
        filtered = fields.filter(field => {
            console.log(selectedLocation)
            return field.locationDTO.name === selectedLocation;
        });
    } else if (selectedLocation === "" || selectedLocation === null) {
        filtered = fields;
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: "10px"
    };

    const getVacancies = (fieldName, date) => {
        VacanciesService(fieldName, date, (res) => {
            setVacancies(res.data)
            console.log(fieldName)
            console.log(date)
        }, (err) => {
            console.log(err.response.status)
        })
    }

    const formatTime = (dateTime) => {
        var format = "HH:mm"
        var date = new Date(dateTime)
        return moment(date).format(format)
    }

    function handleTimeSlot(e) {
        setReservationConfirmation(true)
    }

    function setTime(startTime, endTime) {
        setSelectedStartTime(startTime)
        setSelectedEndTime(endTime)
        console.log(selectedStartTime)
    }

    const handleConfirmationClose = () => {
        setReservationConfirmation(false)
    }

    const handleReservation = () => {
        CreateReservation(selectedStartTime, selectedEndTime, selectedFieldName, localStorage.getItem("email"), (res) => {
            console.log(res.status)
            if (res.status === 201) {
                setCheck(true)
                setTimeout(() => { window.location.reload(); }, 2000);
            }
            if (res.status !== 201) {
                setCheck(false)
            }

        }, (err) => {
            console.log(err.response.status)
            if (err.response.status !== 201) {
                setCheck(false)
                //console.log(check)
            }

        })
        setIsSnackbarOpen(true)
    }

    return (
        <div>
            {
                localStorage.getItem("isAdmin") === "true" ? (
                    <div style={{ display: "flex", marginLeft: "1em", marginTop: "1em" }}>
                        <AddCircleIcon
                            onClick={() => {
                                handleOpenAddFieldModal()
                            }}
                            sx={{
                                fontSize: "3em",
                                cursor: "pointer"
                            }} />
                        <p style={{ fontWeight: "bolder", fontSize: "2em", marginLeft: "0.3em" }}>
                            Add a new field
                        </p>
                        <Modal
                            open={openAddFieldModal}
                            onClose={handleCloseAddFieldModal}
                            aria-labelledby="add-field-modal-title"
                            aria-describedby="add-field-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="add-field-modal-title" variant="h6" component="h2" sx={{ fontWeight: "bolder", marginBottom: "0.5em" }}>
                                    Add field information
                                </Typography>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formFieldName">
                                        <Form.Label style={{ fontStyle: "italic" }}>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter a name" onChange={(e) => { setName(e.target.value) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formFieldLocation">
                                        <Form.Label style={{ fontStyle: "italic" }}>Location</Form.Label>
                                        <Form.Select
                                            value={locationId}
                                            onChange={(e) => {
                                                setLocationId(e.target.value)
                                            }}>
                                            <option>Select a location</option>
                                            {
                                                locations.map(location => (
                                                    <option value={location.id}>{location.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="contained" sx={{ display: "flex", marginTop: "4em" }}
                                        onClick={() => {
                                            AddFieldService(name, locationId);
                                        }}>
                                        Submit
                                    </Button>
                                </Form>
                            </Box>
                        </Modal>
                    </div>
                ) : (
                    <div></div>
                )
            }
            <div style={{ marginLeft: "1em", marginTop: "1em" }}>
                <FormControl sx={{ width: "500px" }}>
                    <Autocomplete
                        freeSolo
                        id="select-location-label"
                        options={locations.map((option) => option.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search for location..."
                                InputProps={{
                                    ...params.InputProps,
                                }}
                            />
                        )}
                        onInputChange={(e, value, reason, option) => {
                            if (reason === "reset") {
                                setSelectedLocation("");
                            }
                            setSelectedLocation(value);
                        }}
                    />
                </FormControl>

            </div>
            <div class="parent">
                {
                    filtered.map(field => (
                        <div class="child">
                            <Card sx={{ maxWidth: 500, marginTop: '2em', marginBottom: '2em' }}>
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image='field-prototype.jpg'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {field.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOnIcon></LocationOnIcon>
                                        {field.locationDTO.name}, {field.locationDTO.street}, {field.locationDTO.number}
                                    </Typography>
                                </CardContent>
                                {
                                    localStorage.getItem("isAdmin") !== null ? (
                                        localStorage.getItem("isAdmin") !== "false" ? (
                                            <CardContent sx={{ float: "right" }}>
                                                <ModeEditIcon
                                                    onClick={() => {
                                                        handleOpenUpdateModal()
                                                        setSelectedFieldId(field.id)
                                                    }}
                                                    sx={{
                                                        cursor: "pointer",
                                                        fontSize: "2em"
                                                    }} />
                                                <DeleteIcon
                                                    onClick={() => {
                                                        DeleteFieldService(field.id)
                                                    }}
                                                    sx={{
                                                        cursor: "pointer",
                                                        fontSize: "2em"
                                                    }} />

                                                <Modal
                                                    open={openUpdateModal}
                                                    onClose={handleCloseUpdateModal}
                                                    aria-labelledby="update-modal-title"
                                                    aria-describedby="update-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <Typography id="update-modal-title" variant="h6" component="h2" sx={{ fontWeight: "bolder", marginBottom: "0.5em" }}>
                                                            Edit field information
                                                        </Typography>
                                                        <Form>
                                                            <Form.Group className="mb-3" controlId="formFieldName">
                                                                <Form.Label style={{ fontStyle: "italic" }}>Name</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter another name" onChange={(e) => { setUpdateName(e.target.value) }} />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formFieldLocation">
                                                                <Form.Label style={{ fontStyle: "italic" }}>Location</Form.Label>
                                                                <Form.Select
                                                                    value={value}
                                                                    onChange={(e) => {
                                                                        setValue(e.target.value)
                                                                    }}>
                                                                    <option>Select another location</option>
                                                                    {
                                                                        locations.map(location => (
                                                                            <option value={location.id}>{location.name}</option>
                                                                        ))
                                                                    }
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Button variant="contained" sx={{ display: "flex", marginTop: "4em" }}
                                                                onClick={() => {
                                                                    UpdateFieldService(selectedFieldId, updateName, value);
                                                                }}>
                                                                Submit
                                                            </Button>
                                                        </Form>
                                                    </Box>
                                                </Modal>
                                            </CardContent>
                                        ) : (
                                            <CardActions>
                                                <Button size="small" onClick={() => {
                                                    handleOpen()
                                                    setSelectedFieldName(field.name)
                                                }}>Select date</Button>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="select-date-title"
                                                    aria-describedby="select-date-description"
                                                >
                                                    <Box sx={style}>
                                                        <Typography id="select-date-title" variant="h6" component="h2">
                                                            Please select a date
                                                        </Typography>
                                                        <div id="select-date-description">
                                                            <Form.Group controlId="chooseDate">
                                                                <Form.Control
                                                                    type="date"
                                                                    name="chooseDate"
                                                                    onChange={(e) => {
                                                                        getVacancies(selectedFieldName, e.target.value)
                                                                        console.log(field.id)
                                                                    }}
                                                                />
                                                            </Form.Group>
                                                        </div>
                                                        <br></br>
                                                        {
                                                            vacancies.length === 0 ? (
                                                                <Typography id="no-vacancies" variant="h6" component="h2">
                                                                    There are no available time slots. Try another date.
                                                                </Typography>
                                                            ) : (
                                                                <div>
                                                                    <Typography id="available-vacancies" variant="h6" component="h2">
                                                                        Available time slots
                                                                    </Typography>
                                                                    {
                                                                        vacancies.map(interval => (
                                                                            <Button
                                                                                variant='outlined'
                                                                                sx={{
                                                                                    borderColor: "black",
                                                                                    color: "black",
                                                                                    cursor: "pointer"
                                                                                }}
                                                                                value={formatTime(interval.startTime) + '-' + formatTime(interval.endTime)}
                                                                                onClick={(e) => {
                                                                                    handleTimeSlot(e, 'value')
                                                                                    setTime(interval.startTime, interval.endTime)
                                                                                }}
                                                                            >{formatTime(interval.startTime)}-{formatTime(interval.endTime)}</Button>

                                                                        ))
                                                                    }
                                                                    {
                                                                        localStorage.getItem("isAdmin") === null ? (
                                                                            <div></div>
                                                                        ) : (
                                                                            localStorage.getItem("isAdmin") !== "true" ? (
                                                                                <div>
                                                                                    <Dialog
                                                                                        open={reservationConfirmation}
                                                                                        onClose={handleConfirmationClose}
                                                                                        aria-labelledby="confirmation-title"
                                                                                    >
                                                                                        <DialogTitle id="confirmation-title">
                                                                                            {"Would you like to make a reservation for this date?"}
                                                                                        </DialogTitle>
                                                                                        <DialogActions>
                                                                                            <Button color="error" variant="contained" onClick={handleConfirmationClose}>Cancel</Button>
                                                                                            <Button color="success" variant="contained"
                                                                                                onClick={() => {
                                                                                                    console.log(selectedEndTime)
                                                                                                    console.log(selectedStartTime)
                                                                                                    handleReservation()
                                                                                                }}
                                                                                                autoFocus>
                                                                                                Agree
                                                                                            </Button>
                                                                                        </DialogActions>
                                                                                    </Dialog>
                                                                                </div>
                                                                            ) : (
                                                                                <div></div>
                                                                            )
                                                                        )
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                    </Box>
                                                </Modal>
                                            </CardActions>
                                        )
                                    ) : (
                                        <CardActions>
                                            <Button size="small" onClick={handleOpen}>Select date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="select-date-title"
                                                aria-describedby="select-date-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="select-date-title" variant="h6" component="h2">
                                                        Please select a date
                                                    </Typography>
                                                    <div id="select-date-description">
                                                        <Form.Group controlId="chooseDate">
                                                            <Form.Control
                                                                type="date"
                                                                name="chooseDate"
                                                                onChange={(e) => {
                                                                    getVacancies(field.name, e.target.value)
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <br></br>
                                                    {
                                                        vacancies.length === 0 ? (
                                                            <Typography id="no-vacancies" variant="h6" component="h2">
                                                                There are no available time slots. Try another date.
                                                            </Typography>
                                                        ) : (
                                                            <div>
                                                                <Typography id="available-vacancies" variant="h6" component="h2">
                                                                    Available time slots
                                                                </Typography>
                                                                {
                                                                    vacancies.map(interval => (
                                                                        <Button
                                                                            variant='outlined'
                                                                            sx={{
                                                                                borderColor: "black",
                                                                                color: "black",
                                                                                cursor: "pointer"
                                                                            }}
                                                                            value={formatTime(interval.startTime) + '-' + formatTime(interval.endTime)}
                                                                            onClick={(e) => {
                                                                                handleTimeSlot(e, 'value')
                                                                                setTime(interval.startTime, interval.endTime)
                                                                            }}
                                                                        >{formatTime(interval.startTime)}-{formatTime(interval.endTime)}</Button>

                                                                    ))
                                                                }
                                                                {
                                                                    localStorage.getItem("isAdmin") === null ? (
                                                                        <div></div>
                                                                    ) : (
                                                                        localStorage.getItem("isAdmin") !== "true" ? (
                                                                            <Dialog
                                                                                open={reservationConfirmation}
                                                                                onClose={handleConfirmationClose}
                                                                                aria-labelledby="confirmation-title"
                                                                            >
                                                                                <DialogTitle id="confirmation-title">
                                                                                    {"Would you like to make a reservation for this date?"}
                                                                                </DialogTitle>
                                                                                <DialogActions>
                                                                                    <Button color="error" variant="contained" onClick={handleConfirmationClose}>Cancel</Button>
                                                                                    <Button color="success"
                                                                                        variant="contained"
                                                                                        onClick={() => {
                                                                                            handleReservation()
                                                                                        }} autoFocus>
                                                                                        Agree
                                                                                    </Button>
                                                                                </DialogActions>
                                                                            </Dialog>
                                                                        ) : (
                                                                            <div></div>
                                                                        )
                                                                    )
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </Box>
                                            </Modal>
                                        </CardActions>
                                    )
                                }
                            </Card>
                        </div>
                    ))
                }
            </div>
            {
                check === true ? (
                    <Snackbar
                        id='reservationSuccessful'
                        open={isSnackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => { setIsSnackbarOpen(false) }}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert id='reservationSuccessful' onClose={() => { setIsSnackbarOpen(false) }} severity='success' sx={{ width: '100%' }}>
                            You've successfully reserved the selected tennis field!
                        </Alert>
                    </Snackbar>
                ) : (
                    <Snackbar
                        id='reservationUnsuccessful'
                        open={isSnackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => { setIsSnackbarOpen(false) }}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert id='reservationUnsuccessful' onClose={() => { setIsSnackbarOpen(false) }} severity='error' sx={{ width: '100%' }}>
                            Hmm... Something went wrong.
                        </Alert>
                    </Snackbar>
                )
            }
        </div >
    )

}

export default FieldsPage;