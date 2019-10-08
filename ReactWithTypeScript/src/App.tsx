import React from "react";
import MessageView from "./components/MessageView";
import {Message} from "./domain/Message";
import MessageCompose from "./components/MessageCompose";

const App: React.FunctionComponent = (): JSX.Element => {
    const messages: Message[] = [
        {
            id: "12939",
            message: "React ist cool",
            author: "Dennis",
            date: Date.now()
        },
        {
            id: "12940",
            message: "React geht so",
            author: "unbekannt",
            date: Date.now()
        }
    ];
    const messageElements = messages.map(m => <MessageView message={m} />);
    return (
        <>
            {messageElements}
            <MessageCompose />
        </>
    );
};

export default App;