import axiosInstance from "../axios";

export function AddFieldService(name, locationId) {
    let credentials = {
        name: name,
        locationId: locationId,
    }

    axiosInstance.post("/field", credentials)
        .then(
            res => {
            }
        )
        .catch(error => {
            console.log(error);
        })
}
