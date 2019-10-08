import React from "react";
import MessageView from "./components/MessageView";

interface Props {
    text: string,
    name: string,
}

const App = ({text, name}: Props) => <MessageView text={text} name={name} />;

export default App;