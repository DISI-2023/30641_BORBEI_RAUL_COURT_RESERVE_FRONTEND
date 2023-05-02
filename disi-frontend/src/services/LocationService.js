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

export function GetLocationsService(callback, errorCallback) {
    axiosInstance.get("/location")
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
