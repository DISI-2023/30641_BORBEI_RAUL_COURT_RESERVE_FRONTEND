import React, { useState, useMemo, useCallback } from 'react';
import { Button, Snackbar, Alert, IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from './StyledComponents';
import {
    validateUsernameRegister,
    validateEmailRegister,
    validatePasswordRegister
} from '../validators/RegisterValidators.tsx';
import useTextFieldErrors from '../hooks/UseTextFieldErrors.tsx';
import {RegisterClient} from '../services/UserService';

const RegisterUser = () => {

    const email = useTextFieldErrors('', validateEmailRegister);
    const username = useTextFieldErrors('', validateUsernameRegister);
    const password = useTextFieldErrors('', validatePasswordRegister);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const RegisterFormFields = {
        username: 'username',
        email: 'email',
        password: 'password'
    }

    const handleClick = async () => {
        try {
            RegisterClient(email.value, username.value, password.value);
            setIsSnackbarOpen(true);
            setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 2000);
        } catch (e) {
            console.log(e.data);
        }
    };

    const handleClose = () => {
        setIsSnackbarOpen(false);
    };

    const formFieldsManagers = useMemo(
        () => ({
            [RegisterFormFields.username]: username,
            [RegisterFormFields.email]: email,
            [RegisterFormFields.password]: password
        }),
        [username, email, password]
    );

    const onInputChange = useCallback(
        (ev) => {
            formFieldsManagers[ev.target.name].setValue(ev.target.value);
        },
        [formFieldsManagers]
    );

    return (
        <div className="bg" style={{height: "100%"}}>
            <GridGlobalStyled container spacing={2} columns={2} id='registerForm'>
                <GridColorStyled item xs={4}>
                    <TitleStyled id='registerFormTitle' style={{ font: "inherit", fontSize: "30px" }}>
                        Register
                    </TitleStyled>
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='registerUserFormEmailField'
                        label='Email'
                        name={RegisterFormFields.email}
                        helperText={email.errors}
                        error={email.hasErrors}
                        onChange={onInputChange}
                        onBlur={email.validate}
                        value={email.value}
                        variant='outlined'
                        placeholder='john_doe@yahoo.com'
                        autoComplete='off'
                    />
                    <Tooltip id='infoButtonForEmail' title='between 7-74 characters and {alphanumeric and underline}@{string}.com format'>
                        <IconButton>
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='registerUserFormUsernameField'
                        label='Username'
                        name={RegisterFormFields.username}
                        helperText={username.errors}
                        error={username.hasErrors}
                        onChange={onInputChange}
                        onBlur={username.validate}
                        value={username.value}
                        variant='outlined'
                        placeholder='John'
                        autoComplete='off'
                    />
                    <Tooltip id='infoButtonForUsername' title='between 2-100 alpha characters, including "-" and " "'>
                        <IconButton>
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='registerUserFormPasswordField'
                        label='Password'
                        name={RegisterFormFields.password}
                        helperText={password.errors}
                        error={password.hasErrors}
                        onChange={onInputChange}
                        onBlur={password.validate}
                        value={password.value}
                        variant='outlined'
                        type='password'
                        placeholder='******'
                        autoComplete='off'
                    />
                    <Tooltip id='infoButtonForPassword' title='between 2-100 characters and no whitespaces'>
                        <IconButton>
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </GridColorStyled>
                <GridStyled item xs={4}>
                    <Button id='registerUserFormSubmitButton'
                        variant='contained'
                        disabled={
                            !(email.value && password.value && username.value) ||
                            password.hasErrors ||
                            username.hasErrors ||
                            email.hasErrors
                        }
                        onClick={handleClick} style={{ borderRadius: "2em" }}>
                        Register
                    </Button>
                </GridStyled>
            </GridGlobalStyled>
            <Snackbar
                id='successMessageForRegisterUserSnackbar'
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert id='successMessageForRegisterUser' onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                    Registration was successful!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default RegisterUser;