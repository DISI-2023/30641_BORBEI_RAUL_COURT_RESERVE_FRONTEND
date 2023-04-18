import React, { useEffect, useRef, useState } from 'react';
import { Button, Snackbar, Alert, IconButton, Tooltip, Typography, Link } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextFieldStyled, TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from './StyledComponents';
import LoginService from '../services/LoginService';

const LoginUser = () => {
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);

    const handleLogin = async () => {
        try {
            LoginService(email, password);
        } catch (e) {
            console.log(e.data);
        }
    }

    return (
        <div className='bg'>
            <GridGlobalStyled container spacing={2} columns={2} id='loginForm'>
                <GridColorStyled item xs={4}>
                    <TitleStyled id='loginFormTitle' style={{ font: "inherit", fontSize: "30px" }}>
                        Login
                    </TitleStyled>
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='loginUserFormEmailField'
                        label='Email'
                        variant='outlined'
                        placeholder='john_doe@yahoo.com'
                        autoComplete='off'
                        onChange={e => setEmail(e.target.value)}
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
                    <Button variant='contained' 
                            style={{ borderRadius: "2em" }}
                            onClick={handleLogin}>
                        Sign in
                    </Button>
                </GridStyled>
                <GridStyled item xs={4}>
                    <Typography>
                        Don't have an account yet?
                    </Typography>
                    <Link href="/register">
                        <Typography>
                            Register now
                        </Typography>
                    </Link>
                </GridStyled>
            </GridGlobalStyled>
        </div>
    )
}


export default LoginUser;