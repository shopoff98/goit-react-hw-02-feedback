import { NotificationText } from "./styled/Notification.styled";

const Notification = ({ message }) => {
    return (
        <NotificationText>{message}</NotificationText>
    )
}

export default Notification;