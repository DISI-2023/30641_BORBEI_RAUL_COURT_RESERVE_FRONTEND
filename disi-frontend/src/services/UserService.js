import axiosInstance from "../axios";

function RegisterClient(email, username, password) {
    let credentilas = {
        email: email,
        username: username,
        password: password,
    }

    axiosInstance.post("/user", credentilas)
        .then(
            res => {
            }
        )
        .catch(error => {
            console.log(error)
        })
}

export default RegisterClient;