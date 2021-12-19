import React from "react";
import Message from "./message"

const Messages = ({messages}) => {
    return ( messages.map((message, index) => <Message key={index} message = {message}/>) )
};

export default Messages;