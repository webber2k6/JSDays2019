import React from "react";
import {Message} from "../domain/Message";

interface Props {
    message: Message;
}

const MessageView: React.FunctionComponent<Props> = ({message}): JSX.Element => (
    <article>
        #{message.id} - {message.message}
        <footer>By: {message.author}, at: {message.date}</footer>
    </article>
);

export default MessageView;