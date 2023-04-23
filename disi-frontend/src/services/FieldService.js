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
}

export function GetFieldsService() {
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
    window.location.href = 'http://localhost:3000/admin';
}

export function DeleteFieldService(id) {
    console.log(id);
    axiosInstance.delete("/field/" + id)
        .then(
            res => {
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
            }
        )
        .catch(error => {
            console.log(error);
        })
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
}

