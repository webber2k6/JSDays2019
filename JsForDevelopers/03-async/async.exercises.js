/**
 * 1. Write a function fetchUsers that accepts a callback function that
 * will receive an array of user objects after 1 second.
 * Print the user objects to the console
 */
function fetchUsers(callback) {
    const data = [
        { username: 'user1' },
        { username: 'user2' },
    ];
    setTimeout(
        () => callback(data),
        1000
    );
}
fetchUsers(
    function (data) {
        console.log('callback: ', data)
    }
);

/**
 * 2. Modify the fetchUsers function to use promises.
 * The function resolves after 1 second.
 */
function fetchUsersPromise() {
    const data = [
        { username: 'pUser1' },
        { username: 'pUser2' },
    ];
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => resolve(data),
                1000
            )
        }
    )
}
fetchUsersPromise()
    .then((data) => console.log('Premise: ', data));

/**
 * 3. Use the fetchUsers function with async/await
 */
(async function() {
    console.log('async/await: ', await fetchUsersPromise());
})();

/**
 * 4. Write a function fetchOtherUsers that returns a promise
 * with other user objects, that resolves after 2 seconds
 *
 * a) Use Promise.race, to work with the fastest Promise
 * b) Use Promise.all to combine the two results
 */
function fetchOtherUsers(source) {
    const data = [
        { username: 'rUser1', source: source },
        { username: 'rUser2', source: source },
    ];
    return new Promise(
        (resolve, reject) =>
            setTimeout(
                () => resolve(data),
                Math.round(Math.random() * 4000),
            )
    );
}
Promise.race([
    fetchOtherUsers(1),
    fetchOtherUsers(2),
    fetchOtherUsers(3),
    fetchOtherUsers(4),
]).then(
    data => console.log(data)
);

Promise.all([
    fetchOtherUsers(1),
    fetchOtherUsers(2)
]).then(
    data => console.log(data)
);
