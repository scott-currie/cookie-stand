'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.getRandomInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  this.cookieSales = []; // holds our results
  this.totalSales = 0;
  this.getSalesByHour = function() {
    // loop through all 15 hours and add the randomized sales to cookieSales
    for (var i = 0; i < hours.length; i++) {
      var salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgSale;
      this.cookieSales.push(Math.round(salesThisHour));
      this.totalSales += salesThisHour;
    }
  };
  this.render = function() {
    // get a reference to our table
    var salesTable = document.getElementById('salesTable');
    console.log(salesTable);

      // // figure out which element id to look for
      // var listId = 'store' + (i + 1);
      // // get the ul with the correct id
      // var storeList = document.getElementById(listId);
      // // set ul text to location name
      // storeList.textContent = loc.name;
      // // loop through cookieSales and create a new child li for each item
      // for (var j = 0; j < loc.cookieSales.length; j++) {
      //   var listItem = document.createElement('li');
      //   listItem.textContent = hours[j] + ': ' + loc.cookieSales[j];
      //   storeList.appendChild(listItem);
      // }
      // listItem.textContent = 'Total: ' + Math.round(loc.totalSales);
    
  };
}

function makeTableHead() {
  // select the div where our table goes
  var tableArea = document.getElementById('tableArea');
  // create the new table element
  var newTable = document.createElement('table');
  newTable.setAttribute('id', 'salesTable');
  //append newTable to tableArea
  tableArea.appendChild(newTable);
  // create new head element
  var newHead = document.createElement('thead');
  //append newHead to newTable
  newTable.appendChild(newHead);
  // create an header row
  var newRow = document.createElement('tr');
  // create empty cell
  var newCell = document.createElement('td');
  // append empty newCell to newRow
  newRow.appendChild(newCell);
  for (var i = 0; i < hours.length; i++) {
    newCell = document.createElement('td');
    newCell.textContent = hours[i];
    newRow.appendChild(newCell);
  }
  // append newRow to newHead
  newHead.appendChild(newRow);
}

function makeTableFoot() {

}

// data for creating Store objects
var locationData = [
  ['1st and Pike', 23, 65, 6.3],
  ['SeaTac Airport', 3, 24, 1.2],
  ['Seattle Center', 11, 38, 3.7],
  ['Capitol Hill', 20, 38, 2.3],
  ['Alki', 23, 65, 6.3]
];

makeTableHead();

// locations will hold the Store objects
var locations = [];
// stepping through locatioData
for (let i = 0; i < locationData.length; i++) {
  // add a new Store object to locations for each locationData element
  locations.push(new Store(locationData[0], locationData[1], locationData[2], locationData[3]));
  // I hoped to have the constructor for Store do this the IIFE way, but that's not working yet.
  locations[i].getSalesByHour();
  locations[i].render();
}



