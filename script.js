function createTable() {
  // Get table element
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Prompt for rows and columns
  const rn = parseInt(prompt("Input number of rows"));
  const cn = parseInt(prompt("Input number of columns"));

  // Validate input
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Create table rows and cells
  for (let i = 0; i < rn; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

// Add event listener to button
document.querySelector("button").addEventListener("click", createTable);
