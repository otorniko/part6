import { useNotification } from "../NotificationContext"

const Notification = () => {
    const notification = useNotification()

    const containerStyle = {
        minHeight: "42px",
        visibility: notification.length > 0 ? "visible" : "hidden",
    }

    const notificationStyle = {
        border: "1px solid",
        padding: 10,
    }

    return (
        <div style={containerStyle}>
            {notification.length > 0 && <div style={notificationStyle}>{notification}</div>}
        </div>
    )
}

export default Notification
