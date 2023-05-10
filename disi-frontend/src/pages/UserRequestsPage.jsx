import React, { useEffect, useState } from 'react'
import { GetUserSubscriptions } from '../services/SubscriptionService';
import { GetRequests, AcceptRequest } from '../services/RequestService';
import { Accordion, Typography, AccordionSummary, AccordionDetails, Snackbar, Alert, Button } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ChevronDown } from 'react-feather'
import moment from 'moment/moment'

function UserRequestsPage() {
    const userId = localStorage.getItem("id")
    const [userRequests, setUserRequests] = useState([])
    const [value, setValue] = React.useState('future');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const formatDate = (dateTime) => {
        var format = "yyyy-MM-DD"
        var date = new Date(dateTime)
        return moment(date).format(format)
    }

    const formatTime = (dateTime) => {
        var format = "HH:mm"
        var date = new Date(dateTime)
        return moment(date).format(format)
    }

    useEffect(() => {
        GetRequests((res) => {
            setUserRequests(res.data)
            console.log(res.data)
        }, (err) => {
            console.log(err)
        })
    }, [])

    function UsersRequestsList(props) {
        return (
            <div>
                {
                    props.userRequests?.map((request) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ChevronDown />}
                                aria-controls={"request-" + request.id + "-content"}
                                id={"request-" + request.id + "-header"}
                            >
                                {
                                    request.take_over === false ? (<Typography sx={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "20px" }}>
                                        {"Request for partner from " + request.postedByUser.email + " on " + formatDate(request.reservation.startTime)}
                                    </Typography>) : (<Typography sx={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "20px" }}>
                                        {"Request for take over from " + request.postedByUser.email + " on " + formatDate(request.reservation.startTime)}
                                    </Typography>)
                                }
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
                                    {
                                        request.takenByUser !== null ? (<div style={{ display: "inline-flex", gap: "20px" }}>
                                            <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Taken by</Typography><Typography>{request.takenByUser.username}</Typography>
                                        </div>) : (<div style={{ display: "inline-flex", gap: "20px" }}>
                                            <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Taken by</Typography><Typography>{"-"}</Typography>
                                        </div>)
                                    }
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                            Field name
                                        </Typography>
                                        <Typography>
                                            {request.reservation.fieldName}
                                        </Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Starts on</Typography><Typography>{formatDate(request.reservation.startTime)}</Typography>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>at</Typography><Typography>{formatTime(request.reservation.startTime)}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Ends on</Typography><Typography>{formatDate(request.reservation.endTime)}</Typography>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>at</Typography><Typography>{formatTime(request.reservation.endTime)}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Total</Typography><Typography>{request.reservation.finalPrice}</Typography>
                                    </div>
                                    <div style={{ display: "flex", gap: 12 }}>
                                        <Button
                                            variant="contained"
                                            style={{
                                                color: "white",
                                                backgroundColor: "primary",
                                            }}
                                            disabled={request.takenByUser !== null || request.postedByUser.id === localStorage.getItem("id")}
                                            onClick={() => {
                                                AcceptRequest(request.id, 'false', request.postedByUser.id, localStorage.getItem("id"), request.reservation.id, (res) => {
                                                    if (res.status === 200) {
                                                        window.location.reload()
                                                    }
                                                }, (err) => {
                                                })
                                            }}
                                            sx={{
                                                width: "fit-content",
                                            }}
                                        >
                                            Accept
                                        </Button>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>
        )
    }

    return (
        <div style={{
            padding: "20px",
            maxWidth: "100%"
        }}>
            <h1>My requests</h1>
            <br></br>
            <br></br>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="requests-tabs"
                    >
                        <Tab sx={{ fontWeight: "bold" }} value="past" label="Partner requests" />
                        <Tab sx={{ fontWeight: "bold" }} value="future" label="Take over requests" />
                    </Tabs>
                </Box>
                <Box>
                    {value === "past" && (
                        <Box>
                            <UsersRequestsList userRequests={userRequests.filter(request => {
                                return request && (request.take_over === false);
                            })} />
                        </Box>
                    )}
                    {value === "future" && (
                        <Box>
                            <UsersRequestsList userRequests={userRequests.filter(request => {
                                return request && (request.take_over === true);
                            })} />
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    )
}

export default UserRequestsPage