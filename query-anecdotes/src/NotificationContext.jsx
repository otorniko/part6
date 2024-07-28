import { useContext } from "react"
import { createContext, useReducer } from "react"

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "SET":
            return action.payload
        case "RESET":
            return ""
        default:
            break
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = props => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, "")

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext

export const useNotification = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const dispatchNotification = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

