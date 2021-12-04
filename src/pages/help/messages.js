import React from "react";
import Message from "./message"

const Messages = ({messages}) => {
    return (
    <>
        {messages.map((message) => (
            <Message message = {message}/>
        ))}
    </>
    )
};

export default Messages;