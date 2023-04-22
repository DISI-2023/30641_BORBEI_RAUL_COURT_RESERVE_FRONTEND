import React, { useState, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { Button, Snackbar, Alert, Grid } from '@mui/material';
import { CreateFieldGridStyled, MainGridStyled, GridColorStyled, TextFieldFieldStyled, TitleStyled, SaveButtonStyled, AlertStyled } from './StyledComponents';
import { AddLocationService } from '../services/LocationService';
import { AdminMainGridStyled, StickyFilterMenuStyled, CenteredTitlesStyled, FieldsGridStyled, FieldCardStyled, FieldCardContentStyled, FieldNameStyled, FieldLocationStyled } from './StyledComponents';
import { LocationCard } from './cards/LocationCard';

const ViewAllLocationsPage = () => {

    return (
        <div className="bg">
            <Navbar></Navbar>
            <AdminMainGridStyled container id='viewAllFieldsPageContainer'>
                <Grid item id='viewAllFieldsContainer' sx={{ marginTop: '71px' }}>
                    <CenteredTitlesStyled container id='viewAllFieldsBasicInformation'>
                        <Grid item id='allFieldsHeader'>
                            <h1>All locations</h1>
                        </Grid>
                        <Grid item id='totalNoFieldsHeader'>
                            <h3>{JSON.parse(localStorage.getItem("locationList")).length} results</h3>
                        </Grid>
                    </CenteredTitlesStyled>
                    <FieldsGridStyled container spacing={2} id='allFieldsGridContainer'>
                        {JSON.parse(localStorage.getItem("locationList")).map((location) => {
                            return (
                                <Grid item key={location.id}>
                                    <LocationCard location={location} />
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

export default ViewAllLocationsPage;