import React, { useState } from 'react';
import { Button, IconButton, Tooltip, Typography, Link } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from './StyledComponents';
import { LoginService } from '../services/UserService';
import { Snackbar, Alert } from '@mui/material';

const LoginUser = () => {
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const [check, setCheck] = useState(true);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleLogin = async () => {
        try {
            LoginService(email, password, (res) => {
                console.log(res.status)
                if (res.status === 200) {
                    localStorage.setItem("id", res.data.id)
                    localStorage.setItem("username", res.data.username)
                    localStorage.setItem("email", res.data.email)
                    localStorage.setItem("isAdmin", res.data.isAdmin)
                    setCheck(true)
                    setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 2000);
                }
                if (res.status !== 200) {
                    setCheck(false)
                }
                //console.log(check)

            }, (err) => {
                console.log(err.response.status)
                if (err.response.status === 404) {
                    setCheck(false)
                    //console.log(check)
                }

            })
            setIsSnackbarOpen(true)
        } catch (e) {
            console.log(e.data)
        }
    }

    return (
        <div className='bg' style={{height: "100%"}}>
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
                        id='loginUserFormPasswordField'
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
            {
                check === true ? (
                    <Snackbar
                        id='loginUserSuccessful'
                        open={isSnackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => { setIsSnackbarOpen(false) }}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert id='loginUserSuccessful' onClose={() => { setIsSnackbarOpen(false) }} severity='success' sx={{ width: '100%' }}>
                            Welcome to Court Reserve!
                        </Alert>
                    </Snackbar>
                ) : (
                    <Snackbar
                        id='loginUserUnsuccessful'
                        open={isSnackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => { setIsSnackbarOpen(false) }}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert id='loginUserUnsuccessful' onClose={() => { setIsSnackbarOpen(false) }} severity='error' sx={{ width: '100%' }}>
                            Your email or password is incorrect
                        </Alert>
                    </Snackbar>
                )
            }

        </div>
    )
}


export default LoginUser;