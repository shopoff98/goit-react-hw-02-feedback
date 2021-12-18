import { NotificationText } from "./styled/Notification.styled";
import PropTypes from "prop-types";


const Notification = ({ message }) => {
    return (
        <NotificationText>{message}</NotificationText>
    )
}


Notification.protoTypes = {
    message:PropTypes.string.isRequired
}

export default Notification;