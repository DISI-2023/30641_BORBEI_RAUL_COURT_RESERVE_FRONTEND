import React, { useState, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { Button, Snackbar, Alert } from '@mui/material';
import { CreateFieldGridStyled, MainGridStyled, GridColorStyled, TextFieldFieldStyled, TitleStyled, SaveButtonStyled, AlertStyled } from './StyledComponents';
import { AddLocationService } from '../services/LocationService';

const LocationPage = () => {

    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleClick = async () => {
        AddLocationService(name, street, number);
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
                    <GridColorStyled id='gridForLocationName'>
                        <TitleStyled id='registerFormTitle' style={{ font: "inherit", fontSize: "30px" }}>
                            Add a new location
                        </TitleStyled>
                    </GridColorStyled>
                    <br></br>
                    <GridColorStyled id='gridForLocationName'>
                        <TextFieldFieldStyled
                            sx={{ marginBottom: '0px' }}
                            id='inputForLocationdName'
                            autoComplete='off'
                            label='Location name*'
                            variant='outlined'
                            placeholder='Field name*'
                            onChange={e => setName(e.target.value)}
                        />
                    </GridColorStyled>
                    <GridColorStyled id='gridForLocationStreet' sx={{ marginTop: '10px' }}>
                        <TextFieldFieldStyled
                            sx={{ marginBottom: '0px' }}
                            id='inputForLocationStreet'
                            autoComplete='off'
                            label='Street*'
                            variant='outlined'
                            placeholder='Street*'
                            onChange={e => setStreet(e.target.value)}
                        />
                    </GridColorStyled>
                    <GridColorStyled id='gridForLocationNumber' sx={{ marginTop: '10px' }}>
                        <TextFieldFieldStyled
                            sx={{ marginBottom: '0px' }}
                            id='inputForLocationNumber'
                            autoComplete='off'
                            label='Number*'
                            variant='outlined'
                            placeholder='Number*'
                            onChange={e => setNumber(e.target.value)}
                        />
                    </GridColorStyled>
                    <GridColorStyled>
                        <SaveButtonStyled
                            id='createLocationButton'
                            variant='contained'
                            disabled={
                                name === '' ||
                                street === '' ||
                                number === ''
                            }
                            onClick={handleClick}
                        >
                            Save
                        </SaveButtonStyled>
                    </GridColorStyled>
                </MainGridStyled>
            </CreateFieldGridStyled>
            <Snackbar
                id='snackbarForCreateLocation'
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <AlertStyled onClose={handleClose} severity='success' id='alertForSuccessfulCreationOfLocation'>
                    Location was added successfully!
                </AlertStyled>
            </Snackbar>
        </div>
    )

}

export default LocationPage;