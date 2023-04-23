import axiosInstance from "../axios";

export function AddLocationService(name, street, number) {
    let credentials = {
        name: name,
        street: street,
        number: number,
    }

    axiosInstance.post("/location", credentials)
        .then(
            res => {
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
}

export function GetLocationsService() {
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
    window.location.href = 'http://localhost:3000/loc';
}
