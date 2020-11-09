// from data.js
var tableData = data;

// select tbody
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
// data.forEach( day => {
//     console.log(day);
// });

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.

// let tr = d3.select("thead > tr");
// Object.entries(data[0]).forEach( function([key,value]) {
//     let cell=tr.append("th");
//     cell.text(key);
//  }); 

//put data in table
data.forEach( datetime => {
     let tr =  tbody.append("tr");
     Object.entries(datetime).forEach( function([key,value]) {
        let cell=tr.append("td");
        cell.text(value);
     }); 
     
});

d3.select("table").attr("class","table table-striped");

var button = d3.select("#filter-btn");





// Input fields can trigger a change event when new text is entered.
button.on("click", function() {
 // Select the input element and get the raw HTML node
 var inputField = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputField.property("value");
 var filteredData = data.filter(date => date.datetime === inputValue);
 tbody.html("");
 filteredData.forEach( datetime => {
    let tr =  tbody.append("tr");
    Object.entries(datetime).forEach( function([key,value]) {
       let cell=tr.append("td");
       cell.text(value);
    }); 
    
});

});