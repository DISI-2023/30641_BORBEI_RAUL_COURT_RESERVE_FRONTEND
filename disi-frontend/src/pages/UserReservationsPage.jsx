import React, { useEffect, useState } from 'react'
import { CancelReservation, GetUserReservations } from '../services/ReservationService'
import { Accordion, Typography, AccordionSummary, AccordionDetails, Snackbar, Alert } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ChevronDown } from 'react-feather'
import moment from 'moment/moment'
import { Button } from '@mui/material'

function UserReservationsPage() {
    const userId = localStorage.getItem("id")
    const [userReservations, setUserReservations] = useState([])
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [value, setValue] = React.useState('future');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const formatTime = (dateTime) => {
        var format = "HH:mm"
        var date = new Date(dateTime)
        return moment(date).format(format)
    }

    const formatDate = (dateTime) => {
        var format = "yyyy-MM-DD"
        var date = new Date(dateTime)
        return moment(date).format(format)
    }

    useEffect(() => {
        GetUserReservations(userId, (res) => {
            setUserReservations(res.data)
            console.log(res.data)
        }, (err) => {
            console.log(err)
        })
    }, [])

    function UsersReservationsList(props) {
        return (
            <div>
                {
                    props.userReservations?.map((reservation) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ChevronDown />}
                                aria-controls={"reservation-" + reservation.id + "-content"}
                                id={"reservation-" + reservation.id + "-header"}
                            >
                                <Typography sx={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "20px" }}>
                                    {"Reservation for " + reservation.fieldName + " on " + formatDate(reservation.startTime)}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                            Field name
                                        </Typography>
                                        <Typography>
                                            {reservation.fieldName}
                                        </Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Starts on</Typography><Typography>{formatDate(reservation.startTime)}</Typography>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>at</Typography><Typography>{formatTime(reservation.startTime)}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Ends on</Typography><Typography>{formatDate(reservation.endTime)}</Typography>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>at</Typography><Typography>{formatTime(reservation.endTime)}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Total</Typography><Typography>{reservation.finalPrice}</Typography>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            CancelReservation(reservation.id, (res) => {
                                                if (res.status === 200) {
                                                    window.location.reload()
                                                }
                                            }, (err) => {
                                                if (err.response.status === 304) {
                                                    setIsSnackbarOpen(true)
                                                }
                                                console.log(err)
                                            })
                                        }}
                                        sx={{
                                            width: "fit-content",
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
                <Snackbar
                    id='cancelReservationUnsuccessful'
                    open={isSnackbarOpen}
                    autoHideDuration={6000}
                    onClose={() => { setIsSnackbarOpen(false) }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert id='cancelReservationUnsuccessful' onClose={() => { setIsSnackbarOpen(false) }} severity='error' sx={{ width: '100%' }}>
                        A reservation can be canceled only with minimum of 24h in advance
                    </Alert>
                </Snackbar>
            </div>
        )
    }

    return (
        <div style={{
            padding: "20px",
            maxWidth: "100%"
        }}>
            <h1>My reservations</h1>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="reservations-tabs"
                    >
                        <Tab sx={{ fontWeight: "bold" }} value="past" label="Past" />
                        <Tab sx={{ fontWeight: "bold" }} value="future" label="Future" />
                    </Tabs>
                </Box>
                <Box>
                    {value === "past" && (
                        <Box>
                            <UsersReservationsList userReservations={userReservations.filter(reservation => {
                                return reservation && (new Date(reservation.endTime)).getTime() < Date.now();
                            })} />
                        </Box>
                    )}
                    {value === "future" && (
                        <Box>
                            <UsersReservationsList userReservations={userReservations.filter(reservation => {
                                return reservation && (new Date(reservation.startTime)).getTime() > Date.now();
                            })} />
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    )
}

export default UserReservationsPage