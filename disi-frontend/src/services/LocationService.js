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
}