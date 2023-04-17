import axiosInstance from "../axios";
import React, { useEffect, useRef, useState } from 'react';

function RegisterClient(email, username, password) {
    let credentials = {
        email: email,
        username: username,
        password: password,
    }

    axiosInstance.post("/user", credentials)
        .then(
            res => {
            }
        )
        .catch(error => {
            console.log(error);
        })
}

export default RegisterClient;