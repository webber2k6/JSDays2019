import React from "react";

interface Props {
    text: string,
    name: string,
}

const MessageView = ({text, name}: Props) => (
    <>
        <article>{text}</article>
        <footer>{name}</footer>
    </>
);

export default MessageView;