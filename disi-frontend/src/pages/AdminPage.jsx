import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from '../components/StyledComponents';
import { Button, Snackbar, Alert } from '@mui/material';
import { ChangePasswordService } from '../services/UserService';


const AdminPage = () => {

    return (
        <div className="bg">
            <Navbar></Navbar>

        </div>
    )

}

export default AdminPage;