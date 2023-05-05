import axiosInstance from "../axios";

export function AddFieldService(name, locationId, imageURL) {
    let credentials = {
        name: name,
        locationId: locationId,
        imageUrl: imageURL
    }

    axiosInstance.post("/field", credentials)
        .then(
            res => {
                if (res.status !== 404 || res.status !== 400) {
                    window.location.reload()
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}

export function GetFieldsService(callback, errorCallback) {
    axiosInstance.get("/field")
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

export function DeleteFieldService(id) {
    axiosInstance.delete("/field/" + id)
        .then(
            res => {
                if (res.status !== 404 || res.status !== 400) {
                    window.location.reload()
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}

export function UpdateFieldService(id, name, locationId) {
    let credentials = {
        id: id,
        name: name,
        locationId: locationId,
    }
    axiosInstance.put("/field", credentials)
        .then(
            res => {
                if (res.status !== 404 || res.status !== 400) {
                    window.location.reload()
                }
            }
        )
        .catch(error => {
            console.log(error);
        })
}

