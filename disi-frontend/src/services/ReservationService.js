import axiosInstance from "../axios";

export function VacanciesService(fieldName, date, callback, errorCallback) {
    let credentials = {
        fieldName: fieldName,
        date: date,
    }

    axiosInstance.post("/reservation/vacancies", credentials)
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

export function CreateReservation(startTime, endTime, fieldName, userEmail, callback, errorCallback) {
    let credentials = {
        startTime: startTime,
        endTime: endTime,
        fieldName: fieldName,
        userEmail: userEmail,
    }

    axiosInstance.post("/reservation", credentials)
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

export function GetUserReservations(userId, callback, errorCallback) {
    axiosInstance.get("/reservation/user/" + userId)
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

export function CancelReservation(id, callback, errorCallback) {
    axiosInstance.delete("/reservation/" + id)
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

