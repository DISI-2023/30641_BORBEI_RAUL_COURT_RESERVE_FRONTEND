import React, { useEffect, useState } from 'react'
import { GetUserSubscriptions } from '../services/SubscriptionService';
import { Accordion, Typography, AccordionSummary, AccordionDetails, Snackbar, Alert } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ChevronDown } from 'react-feather'
import moment from 'moment/moment'

function UserSubscriptionsPage() {
    const userId = localStorage.getItem("id")
    const [userSubscriptions, setUserSubscriptions] = useState([])
    const [value, setValue] = React.useState('future');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const formatDate = (dateTime) => {
        var format = "yyyy-MM-DD"
        var date = new Date(dateTime)
        return moment(date).format(format)
    }

    useEffect(() => {
        GetUserSubscriptions(userId, (res) => {
            setUserSubscriptions(res.data)
            console.log(res.data)
        }, (err) => {
            console.log(err)
        })
    }, [])

    function UsersSubscriptionsList(props) {
        return (
            <div>
                {
                    props.userSubscriptions?.map((subscription) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ChevronDown />}
                                aria-controls={"subcription-" + subscription.id + "-content"}
                                id={"subscriprion-" + subscription.id + "-header"}
                            >
                                <Typography sx={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "20px" }}>
                                    {"Subscription for " + subscription.fieldName + " on " + formatDate(subscription.startTime)}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>
                                            Field name
                                        </Typography>
                                        <Typography>
                                            {subscription.fieldName}
                                        </Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Starts on</Typography><Typography>{formatDate(subscription.startTime)}</Typography>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>at</Typography><Typography>{subscription.startHour}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Ends on</Typography><Typography>{formatDate(subscription.endTime)}</Typography>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>at</Typography><Typography>{subscription.endHour}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Type</Typography><Typography>{subscription.type}</Typography>
                                    </div>
                                    <div style={{ display: "inline-flex", gap: "20px" }}>
                                        <Typography sx={{ fontWeight: "bolder", fontStyle: "italic" }}>Total</Typography><Typography>{subscription.finalPrice}</Typography>
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
            <h1>My subscriptions</h1>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <UsersSubscriptionsList userSubscriptions={userSubscriptions.filter(subscription => {
                        return subscription;
                    })} />
                </Box>
            </Box>
        </div>
    )
}

export default UserSubscriptionsPage