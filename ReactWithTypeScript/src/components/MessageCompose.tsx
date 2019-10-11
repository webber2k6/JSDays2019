import React from "react";
import {Message} from "../domain/Message";

interface Props {
    onMessageSubmit: (message: Message) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({onMessageSubmit}:Props): JSX.Element => {
    const [inputValue, setInputValue] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (inputValue === "") {
            console.log("empty form");
            return;
        }

        console.log("Submit: " + inputValue);
        onMessageSubmit({
            id: String(Date.now()),
            message: inputValue,
            author: "app",
            date: Date.now()
        });
        setInputValue("");
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={handleOnChange} value={inputValue} placeholder={"Message"} /><br />
            <button style={{marginTop: "5px"}} type={"submit"}>✉ send</button>
        </form>
    );
};

export default MessageCompose;
