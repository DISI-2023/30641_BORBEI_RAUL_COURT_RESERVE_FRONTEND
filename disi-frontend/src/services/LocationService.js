import axiosInstance from "../axios";

export function AddLocation(latitude, longitude) {
    let credentials = {
        latitude: latitude,
        longitude: longitude,
    }

    axiosInstance.post("/location", credentials)
        .then(
            res => {
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

export function UpdateLocation(id, name, street, number) {
    let credentials = {
        id: id,
        name: name,
        street: street,
        number: number,
    }

    axiosInstance.put("/location", credentials)
        .then(
            res => {
                if (res.status === 200) {
                    window.location.reload()
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}
