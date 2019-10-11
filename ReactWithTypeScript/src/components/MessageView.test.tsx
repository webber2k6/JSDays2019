import React from "react";
import { render } from "@testing-library/react"
import MessageView from "./MessageView";

test("<MessageView /> contains message body", () => {
    // arrange
    const messageText = "Hallo, Welt!";
    const { getByText } = render(
        <MessageView
            message={{
                id: "1",
                message: messageText,
                author: "Test",
                date: 42
            }}/>
    );

    // act
    const messageBody = getByText(messageText);

    // assert
    expect(messageBody).toBeDefined();
});

test("<MessageView /> smoke detector", () => {
    // arrange
    const { container } = render(
        <MessageView
            message={{
                id: "1",
                message: "hallo",
                author: "test",
                date: 42
            }}/>
    );

    // assert
    expect(container).toMatchInlineSnapshot(`
        <div>
          <article>
            hallo
            <footer>
              By: 
              test
            </footer>
          </article>
        </div>
    `);
});


