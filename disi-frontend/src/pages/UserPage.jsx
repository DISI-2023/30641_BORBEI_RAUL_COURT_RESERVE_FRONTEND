import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { TextFieldRegisterUserStyled, GridGlobalStyled, TitleStyled, GridColorStyled, GridStyled } from '../components/StyledComponents';
import { Button } from '@mui/material';


const UserPage = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleChangePassword = () => {

    }

    return (
        <div className="bg">
          <Navbar></Navbar>
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
         
        </div>
    )

}

export default UserPage;