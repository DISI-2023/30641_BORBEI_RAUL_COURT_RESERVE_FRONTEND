import React, { useEffect, useRef, useState } from 'react';
import { Button, Snackbar, Alert, IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextFieldStyled, TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from './StyledComponents';

const RegisterUser = () => {

    //for insert client
    const [email, setEmail] = useState(0);
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);

    const getInfo = () => {
        let credentilas = {
            email: email,
            username: username,
            password: password,
        }
      console.log(email);
      console.log(username);
      console.log(password);
    }

    return (
        <div style={{ backgroundColor: "#038cfc" }}>
            <GridGlobalStyled container spacing={2} columns={2} id='registerForm'>
                <GridColorStyled item xs={4}>
                    <TitleStyled variant='h3' id='registerFormTitle'>
                        Register
                    </TitleStyled>
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='registerUserFormEmailField'
                        label='Email'
                        variant='outlined'
                        placeholder='john_doe@yahoo.com'
                        autoComplete='off'
                        onChange={e => setEmail(e.target.value)}
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
                        variant='outlined'
                        placeholder='doej'
                        autoComplete='off'
                        onChange={e => setUsername(e.target.value)}
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
                        variant='outlined'
                        type='password'
                        placeholder='******'
                        autoComplete='off'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Tooltip id='infoButtonForPassword' title='between 2-100 characters and no whitespaces'>
                        <IconButton>
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </GridColorStyled>
                <GridStyled item xs={4}>
                    <Button onClick={getInfo}
                    >
                        Save
                    </Button>
                </GridStyled>
            </GridGlobalStyled>
        </div>
    )
}


export default RegisterUser;