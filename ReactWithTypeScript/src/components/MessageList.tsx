import React from "react";
import {Message} from "../domain/Message";
import MessageView from "./MessageView";

interface Props {
    messages: Message[],
}

const MessageList: React.FunctionComponent<Props> = ({messages}: Props): JSX.Element => {
    return (
        <>
            {messages.map(m => <MessageView key={m.id} message={m} />)}
        </>
    );
};

export default MessageList;
