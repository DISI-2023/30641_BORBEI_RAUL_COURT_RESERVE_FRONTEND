import axiosInstance from "../axios";

export function RegisterClient(email, username, password) {
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

export function LoginService(email, password, callback, errorCallback) {
    let credentials = {
        email: email,
        password: password,
    }

    axiosInstance.post("/login", credentials)
        .then(
            res => {
                if (callback != null)
                    callback(res)
            }
        )
        .catch(error => {
            if (errorCallback != null)
                errorCallback(error)
        })
}

export function ChangePasswordService(currentPassword, newPassword) {
    let credentials = {
        email: localStorage.getItem("email"),
        oldPassword: currentPassword,
        newPassword: newPassword,
    }

    axiosInstance.put("/user/editPassword", credentials)
        .then(
            res => {
                if (res.status !== 404 || res.status !== 400) {
                    setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 1000);
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}