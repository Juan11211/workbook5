"use strict";

// Sample data for testing
const winningTickets = [
  { tixNum: 123, prize: 500, expires: '2023-12-31' },
  { tixNum: 456, prize: 1000, expires: '2023-11-30' },
  { tixNum: 789, prize: 200, expires: '2023-10-31' }
];

// Get the table element by its ID
let table = document.getElementById("winningTicketsTblBody");

window.onload = init;

function init() {
  winningTicketsTable();
}

function winningTicketsTable() {
  // loop through array 
  let numOfTickets = winningTickets.length;
  for (let i = 0; i < numOfTickets; i++) {
    // create an empty <tr> element and add it to the last pos of the table
    addNewRow(winningTickets[i].tixNum, winningTickets[i].prize, winningTickets[i].expires);
  }
}

function addNewRow(ticketNumber, prizeNumber, expires) {
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerHTML = ticketNumber;
  let cell2 = row.insertCell(1);
  cell2.innerHTML = "$" + prizeNumber.toFixed(2);
  let cell3 = row.insertCell(2);
  cell3.innerHTML = expires;
}
