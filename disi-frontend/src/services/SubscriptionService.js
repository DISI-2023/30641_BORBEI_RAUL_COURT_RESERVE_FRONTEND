import axiosInstance from "../axios";

export function CreateSubscription(dayOfWeek, startTime, endTime, startHour, endHour, type, userEmail, fieldName, callback, errorCallback) {
    let credentials = {
        dayOfWeek: dayOfWeek,
        startTime: startTime,
        endTime: endTime,
        startHour: startHour,
        endHour: endHour,
        type: type,
        userEmail: userEmail,
        fieldName: fieldName
    }

    axiosInstance.post("/subscription", credentials)
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

export function GetUserSubscriptions(userId, callback, errorCallback) {
    axiosInstance.get("/subscription/" + userId)
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
