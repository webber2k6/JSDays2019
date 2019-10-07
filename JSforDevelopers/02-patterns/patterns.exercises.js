// factory

/**
 * 1. Finish implementing the following code, so that the following lines are logged:
 * 'Submarine Ticket #1 for Max'
 * 'Submarine Ticket #2 for Daniel'
 * 'Boat Ticket #1 for Samuel'
 */
function makeTicketMachine (attraction) {
  let count = 0;
  return function (passenger) {
    count++;
    return `${attraction} Ticket #${count} for ${passenger}`;
  }
}

const getSubmarineTicket = makeTicketMachine('Submarine');
const getBoatTicket = makeTicketMachine('Boat');

console.log(getSubmarineTicket('Max'));
console.log(getSubmarineTicket('Daniel'));
console.log(getBoatTicket('Samuel'));
