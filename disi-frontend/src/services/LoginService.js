import axiosInstance from "../axios";

function LoginService(email, password) {
    let credentials = {
        email: email,
        password: password,
    }

    axiosInstance.post("/login", credentials)
        .then(
            res => {
                if (res.status !== 404) {
                    setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 2000);
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}

export default LoginService;