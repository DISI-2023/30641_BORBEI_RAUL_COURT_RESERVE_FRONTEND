import React, { useEffect, useRef, useState } from 'react';
import { Button, Snackbar, Alert, IconButton, Tooltip, Typography, Link } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextFieldStyled, TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from './StyledComponents';

const LoginUser = () => {
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);

    return (
        <div className='bg'>
            <GridGlobalStyled container spacing={2} columns={2} id='registerForm'>
                <GridColorStyled item xs={4}>
                    <TitleStyled id='loginFormTitle' style={{font:"inherit", fontSize:"30px"}}>
                        Login
                    </TitleStyled>
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
                    <Button variant='contained' style={{borderRadius: "2em"}}>
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