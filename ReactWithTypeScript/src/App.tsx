import React from "react";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";
import {Message} from "./domain/Message";

interface Props {
}

const App: React.FunctionComponent<Props> = (): JSX.Element => {
    const [messageList, setMessageList] = React.useState<Message[]>([]);

    const handleOnMessageSubmit = (message: Message) => {
        setMessageList(currentList => [
            ...currentList,
            message
        ]);
    };

    return (
        <>
            <MessageList messages={messageList}/>
            <br />
            <MessageCompose onMessageSubmit={handleOnMessageSubmit} />
        </>
    );
};

export default App;
