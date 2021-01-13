function appendRow() {
    let body = document.body.innerHTML
    let tableRows = document.querySelectorAll('tr');
    let tableCells = document.tableRows.querySelectorAll('td')
    console.log(tableCells);
    let tableRow = document.createElement('tr');
    for (i = 0; i < tableRows.length; i++) {
        let row = document.createElement('td');
        tableRow.appendChild(row);
    }

    tableBody.appendChild(tableRow);
  }

appendRow();


console.log(document.body.innerHTML);