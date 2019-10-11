import React from "react";
import {render, fireEvent} from "@testing-library/react";
import MessageCompose from "./MessageCompose";
import {Message} from "../domain/Message";

const renderComponent = (handleMessageSubmit = (message:Message) => {}) =>
    render(<MessageCompose onMessageSubmit={handleMessageSubmit}/>);

test("<MessageCompose /> full flow", () => {
    const newMessage = "new message body";

    const handleMessageSubmit = jest.fn();
    const {getByPlaceholderText, getByText} = renderComponent(handleMessageSubmit);
    const inputElement = getByPlaceholderText("Message");

    fireEvent.change(inputElement, { target: { value: newMessage } });

    const submitButton = getByText(/send/i);

    fireEvent.submit(submitButton);

    expect(handleMessageSubmit).toHaveBeenCalledWith({
        id: expect.any(String),
        message: newMessage,
        author: "app",
        date: expect.any(Number)
    });
});
