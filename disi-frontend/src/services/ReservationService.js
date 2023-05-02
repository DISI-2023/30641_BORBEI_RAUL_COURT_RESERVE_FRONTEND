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

export function CreateReservation(startTime, endTime, fieldName, userEmail) {
    let credentials = {
        startTime: startTime,
        endTime: endTime,
        fieldName: fieldName,
        userEmail: userEmail,
    }

    axiosInstance.post("/reservation", credentials)
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

