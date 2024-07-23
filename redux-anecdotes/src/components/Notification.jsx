import { useSelector } from "react-redux"

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  }
  const styleWithoutNotification = {
      padding: 10,
      borderWidth: 1,
  }
  const notificationState = useSelector(state => state.notification)
  const notification = notificationState.length > 0 ? notificationState : '' 
  if (notificationState.length > 0) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  } else {
  return (
    <div style={styleWithoutNotification}>
      {notification}
    </div>
  )
}
}

export default Notification