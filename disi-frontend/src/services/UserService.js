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

export function LoginService(email, password) {
    let credentials = {
        email: email,
        password: password,
    }

    axiosInstance.post("/login", credentials)
        .then(
            res => {
                if (res.status !== 404 || res.status !== 400) {
                    if (res.data.isAdmin === true) {
                        axiosInstance.get("/field")
                            .then(
                                res => {
                                    localStorage.setItem("fieldList", JSON.stringify(res.data));
                                    localStorage.setItem("totalNoFields", JSON.stringify(res.data.length));
                                }
                            )
                            .catch(error => {
                                console.log(error);
                            })
                        axiosInstance.get("/location")
                            .then(
                                res => {
                                    localStorage.setItem("locationList", JSON.stringify(res.data));
                                    localStorage.setItem("totalNoLocations", JSON.stringify(res.data.length));
                                }
                            )
                            .catch(error => {
                                console.log(error);
                            })
                        setTimeout(() => { window.location.href = 'http://localhost:3000/admin'; }, 2000);
                    }
                    else {
                        setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 2000);
                    }
                    if (res.data !== null) {
                        localStorage.setItem("id", res.data.id)
                        localStorage.setItem("email", res.data.email)
                        localStorage.setItem("username", res.data.username)
                        localStorage.setItem("isAdmin", res.data.isAdmin)
                    }
                }
            }
        )
        .catch(error => {
            console.log(error);
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
                    setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 2000);
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}