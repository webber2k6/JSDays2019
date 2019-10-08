import React from "react";

interface Props {

}

const MessageCompose: React.FunctionComponent<Props> = (): JSX.Element => {
    const [value, setValue] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("Submit: " + value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={event => setValue(event.target.value)} /><br />
            <label>{value}</label><br />
            <button type={"submit"}>✉ send</button>
        </form>
    );
};

export default MessageCompose;