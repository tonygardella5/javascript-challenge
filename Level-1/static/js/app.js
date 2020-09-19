// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function table(data) {
    tbody.html(" ");
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
            }
        );
    
    });

}

function handleClick() {

    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    table(filteredData);

}

d3.selectAll("#filter-btn").on("click", handleClick);
table(tableData);