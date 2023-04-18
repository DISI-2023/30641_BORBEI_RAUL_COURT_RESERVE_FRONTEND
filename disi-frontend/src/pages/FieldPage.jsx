import React, { useState, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { Button, Snackbar, Alert } from '@mui/material';
import { CreateFieldGridStyled, MainGridStyled, GridColorStyled, TextFieldFieldStyled, TitleStyled, SaveButtonStyled } from './StyledComponents';


const FieldPage = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const FieldFormFields = {
        name: 'name',
        location: 'location',
    }

    const handleClick = async () => {

    };

    const handleClose = () => {

    };

    const formFieldsManagers = useMemo(
        () => ({
            [FieldFormFields.name]: name,
            [FieldFormFields.location]: location,
        }),
        [name, location]
    );

    const onInputChange = useCallback(
        (ev) => {
            formFieldsManagers[ev.target.name].setValue(ev.target.value);
        },
        [formFieldsManagers]
    );

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
                        />
                    </GridColorStyled>
                    <GridColorStyled id='gridForFieldLocation' sx={{ marginTop: '10px' }}>
                        <TextFieldFieldStyled
                            sx={{ marginBottom: '0px' }}
                            id='inputForFieldLocation'
                            label='Location*'
                            variant='outlined'
                            placeholder='Location*'
                        />
                    </GridColorStyled>
                    <GridColorStyled>
                        <SaveButtonStyled
                            id='createFieldButton'
                            variant='contained'
                        >
                            Save
                        </SaveButtonStyled>
                    </GridColorStyled>
                </MainGridStyled>
            </CreateFieldGridStyled>
        </div>
    )

}

export default FieldPage;