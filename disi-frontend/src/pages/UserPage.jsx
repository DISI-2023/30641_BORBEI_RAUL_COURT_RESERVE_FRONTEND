import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from '../components/StyledComponents';
import { Button, Snackbar, Alert } from '@mui/material';
import {ChangePasswordService} from '../services/UserService';


const UserPage = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleChangePassword = () => {
        try {
            setIsSnackbarOpen(true);
            ChangePasswordService(currentPassword, newPassword);
        } catch (e) {
            console.log(e.data);
        }
    }

    const handleClose = () => {
        setIsSnackbarOpen(false);
    };

    return (
        <div className="bg">
          <GridGlobalStyled container spacing={2} columns={2} id='changePasswordForm'>
                <GridColorStyled item xs={4}>
                    <TitleStyled id='changePasswordTitle' style={{ font: "inherit", fontSize: "30px" }}>
                        Change password
                    </TitleStyled>
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='currentPasswordField'
                        label='Current password'
                        variant='outlined'
                        type='password'
                        placeholder='******'
                        autoComplete='off'
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                </GridColorStyled>
                <GridColorStyled item xs={4}>
                    <TextFieldRegisterUserStyled
                        id='newPasswordField'
                        label='Create new password'
                        variant='outlined'
                        type='password'
                        placeholder='******'
                        autoComplete='off'
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </GridColorStyled>
                <GridStyled item xs={4}>
                    <Button variant='contained' 
                            style={{ borderRadius: "2em" }}
                            onClick={handleChangePassword}>
                        Submit
                    </Button>
                </GridStyled>
            </GridGlobalStyled>
            <Snackbar
                id='successMessageForEditPassword'
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert id='successMessageForEditPassword' onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                    Your new password was submitted successfully!
                </Alert>
            </Snackbar>
        </div>
    )

}

export default UserPage;