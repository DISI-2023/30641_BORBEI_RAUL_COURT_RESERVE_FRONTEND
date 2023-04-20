import React, { useState, useParams, useEffect } from 'react';
import axiosInstance from "../axios";
import Navbar from '../components/Navbar';
import { Button, Snackbar, Alert, Grid, CardContent } from '@mui/material';
import { ChangePasswordService } from '../services/UserService';
import { MainGridStyled, AdminMainGridStyled, StickyFilterMenuStyled, CenteredTitlesStyled, FieldsGridStyled, FieldCardStyled, FieldCardContentStyled, FieldNameStyled, FieldLocationStyled } from './StyledComponents';
import { FieldCard } from './FieldCard/FieldCardPage';


const AdminPage = () => {
    useEffect(() => {

    }, [])

    return (
        <div className="bg">
            <Navbar></Navbar>
            <AdminMainGridStyled container id='viewAllFieldsPageContainer'>
                <Grid item id='viewAllFieldsContainer' sx={{ marginTop: '71px' }}>
                    <CenteredTitlesStyled container id='viewAllFieldsBasicInformation'>
                        <Grid item id='allEventsHeader'>
                            <h1>All fields</h1>
                        </Grid>
                        <Grid item id='totalNoFieldsHeader'>
                            <h3>{JSON.parse(localStorage.getItem("fieldList")).length} results</h3>
                        </Grid>
                    </CenteredTitlesStyled>
                    <FieldsGridStyled container spacing={2} id='allFieldsGridContainer'>
                        {JSON.parse(localStorage.getItem("fieldList")).map((field) => {
                            return (
                                <Grid item key={field.id}>
                                    <FieldCard field={field} />
                                </Grid>
                            );
                        })}
                    </FieldsGridStyled>
                    <br></br>
                </Grid>
            </AdminMainGridStyled>
        </div>
    );
}

export default AdminPage;