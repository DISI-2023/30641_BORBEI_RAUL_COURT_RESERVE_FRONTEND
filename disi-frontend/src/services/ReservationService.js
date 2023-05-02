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

