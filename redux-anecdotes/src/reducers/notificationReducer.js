import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        setNotificationMessage(state, action) {
            return action.payload
        },
        resetNotification(state, action) {
            return ""
        },
    },
})

export const setNotification = (notification, time) => {
    return async dispatch => {
        dispatch(setNotificationMessage(notification))
        const timeInMs = time * 1000
        setTimeout(() => {
            dispatch(resetNotification())
        }, timeInMs)
    }
}

export const { setNotificationMessage, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer
