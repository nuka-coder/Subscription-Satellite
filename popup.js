var form = document.getElementById("input-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  subscriptionAssignment();

})

function subscriptionAssignment() {

  // Declare variable for creating new table row
  const newRow = document.createElement("TR");
  // Declare variable for td element to put input value into
  const td = document.createElement("TD");
  // Declare variable for tbody
  const tableBody = document.getElementById("subscriptionTableBody");

  // Append new row to tbody in index
  tableBody.appendChild(newRow);
  // Append td to newRow
  newRow.appendChild(td);
  td.classList.add("table-data-style");

    // Declare variable for the subscriptions input
    const subName = document.getElementById("subscriptions");
    // Create variable for subscription input
    const subscription = subName.value;
    // Assign subscription to td
    td.innerHTML= subscription;

    iconAssingment();
};

function iconAssingment() {
if (subscription == "Hulu") {
  alert("the subscription is Hulu.");
}
else (
  alert("The subscription is not Hulu/")
)
};
