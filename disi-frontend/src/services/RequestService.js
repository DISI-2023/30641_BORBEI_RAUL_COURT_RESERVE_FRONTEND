import axiosInstance from "../axios";

export function AddRequest(take_over, postedByUserId, takenByUserId, reservationId) {
    let credentials = {
        take_over: take_over,
        postedByUserId: postedByUserId,
        takenByUserId: takenByUserId,
        reservationId: reservationId
    }

    axiosInstance.post("/request", credentials)
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

export function GetRequests(callback, errorCallback) {
    axiosInstance.get("/request/")
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

export function AcceptRequest(request_id, take_over, postedByUserId, takenByUserId, reservationId) {
    let credentials = {
        id: request_id,
        take_over: take_over,
        postedByUserId: postedByUserId,
        takenByUserId: takenByUserId,
        reservationId: reservationId
    }

    axiosInstance.put("/request/takenByUpdate/", credentials)
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