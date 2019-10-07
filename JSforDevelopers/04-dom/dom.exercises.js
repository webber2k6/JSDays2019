// DOM - to test, open index.html (a file in this folder) in the browser

/**
 * 1. Add 2 other list items to the list with the ID 'list-with-id'. For example, with the content 'F' and 'G'.
 */
const listElement = document.getElementById('list-with-id');
const item1 = document.createElement('li');
item1.innerText = 'f';
const item2 = document.createElement('li');
item2.innerText = 'G';
listElement.appendChild(item1);
listElement.appendChild(item2);

/**
 * 2. Then, delete the first two ('A' and 'B') items of the list.
 */
listElement.removeChild(listElement.firstElementChild);


/**
 * 3. Add an event listener to each list item, so that when clicked, the word "click" is added to the text.
 */
// listElement.childNodes.forEach(
//     node => node.addEventListener(
//         'click',
//         e => e.target.innerText += '(clicked)'
//     )
// );


/**
 * 4. Now, when clicking on each list item, also trigger an event called 'custom:my-click' on that same element.
 */
// listElement.childNodes.forEach(
//     node => node.addEventListener(
//         'click',
//         e => e.target.dispatchEvent(
//             new CustomEvent('custom:my-click', { bubbles: true })
//         )
//     )
// );

/**
 * 5. Listen for the 'custom:my-click' at the 'list-with-id'. Whenever it's fired, add another item to the list.
 */
listElement.addEventListener(
    'custom:my-click',
    e => {
        const newElement = document.createElement('li');
        newElement.innerText = e.target.innerText + ' (by event)';
        listElement.appendChild(newElement);
    }
);

/**
 * 6. Improve the functionality from exercises 3 and 4, so that the 'click' event listener is only added once instead
 * of to every list item individually.
 */
listElement.childNodes.forEach(
    node => {
        node.addEventListener(
            'click',
            e => {
                e.target.innerText += ' (clicked)'
                e.target.dispatchEvent(
                    new CustomEvent('custom:my-click', { bubbles: true })
                )
            }
        )
    }
);