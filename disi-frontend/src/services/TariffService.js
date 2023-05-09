import axiosInstance from "../axios";

export function UpdateTariff(type, fieldName, newPrice) {
    let credentials = {
        type: type, 
        fieldName: fieldName,
        newPrice: newPrice
    }

    axiosInstance.put("/tariff", credentials)
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

export function GetTariffsByField(fieldName, callback, errorCallback) {
    axiosInstance.get("/tariff/field", {
        params: {
            name: fieldName
        }})
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