import React, { useState, useMemo, useCallback, useEffect } from 'react';
import axiosInstance from "../axios";
import Navbar from '../components/Navbar';
import { Button, Snackbar, Alert, InputLabel, Select, FormControl, MenuItem } from '@mui/material';
import { CreateFieldGridStyled, MainGridStyled, GridColorStyled, TextFieldFieldStyled, TitleStyled, SaveButtonStyled, LabelStyled, LabelFieldStyled, AlertStyled } from './StyledComponents';
import { AddFieldService } from '../services/FieldService';

const FieldPage = () => {

    const [name, setName] = useState('');
    const [locationId, setLocationId] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleClick = async () => {
        AddFieldService(name, locationId);
        setIsSnackbarOpen(true);
        setTimeout(() => { window.location.href = 'http://localhost:3000/admin'; }, 2000);
    };

    const handleClose = () => {
        setIsSnackbarOpen(false);
    };

    return (
        <div className="bg">
            <Navbar></Navbar>
            <CreateFieldGridStyled>
                <MainGridStyled>
                    <GridColorStyled id='gridForFieldName'>
                        <TitleStyled id='registerFormTitle' style={{ font: "inherit", fontSize: "30px" }}>
                            Create a new field
                        </TitleStyled>
                    </GridColorStyled>
                    <br></br>
                    <GridColorStyled id='gridForFieldName'>
                        <TextFieldFieldStyled
                            sx={{ marginBottom: '0px' }}
                            id='inputForFieldName'
                            autoComplete='off'
                            label='Field name*'
                            variant='outlined'
                            placeholder='Field name*'
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </GridColorStyled>
                    <GridColorStyled id='gridForFieldLocation' sx={{ marginTop: '10px' }}>
                        <TextFieldFieldStyled
                            sx={{ marginBottom: '0px' }}
                            id='dropdownForCountry'
                            label='Location*'
                            variant='outlined'
                            placeholder='Location*'
                            onChange={(e) => {
                                setLocationId(e.target.value);
                            }}
                        />
                    </GridColorStyled>
                    <GridColorStyled>
                        <SaveButtonStyled
                            id='createFieldButton'
                            variant='contained'
                            disabled={
                                name === '' ||
                                locationId === ''
                            }
                            onClick={handleClick}
                        >
                            Save
                        </SaveButtonStyled>
                    </GridColorStyled>
                </MainGridStyled>
            </CreateFieldGridStyled>
            <Snackbar
                id='snackbarForCreateField'
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <AlertStyled onClose={handleClose} severity='success' id='alertForSuccessfulCreationOfField'>
                    Field was added successfully!
                </AlertStyled>
            </Snackbar>
        </div>
    )

}

export default FieldPage;