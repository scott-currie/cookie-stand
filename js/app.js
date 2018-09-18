'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];
// data for creating Store objects
var storesData = [
  ['1st and Pike', 23, 65, 6.3],
  ['SeaTac Airport', 3, 24, 1.2],
  ['Seattle Center', 11, 38, 3.7],
  ['Capitol Hill', 20, 38, 2.3],
  ['Alki', 23, 65, 6.3]
];

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
    // get a reference to our table body
    var tableBody = document.getElementById('salesTableBody');
    // create a new row element
    var newRow = document.createElement('tr');
    //append newRow to tableBody
    tableBody.appendChild(newRow);
    // create a new td element displaying store name
    var newCell = document.createElement('td');
    newCell.textContent = this.name;
    // append newCell to newRow
    newRow.appendChild(newCell);
    // loop through sales
    for (var i = 0; i < this.cookieSales.length; i++) {
      newCell = document.createElement('td');
      newCell.textContent = this.cookieSales[i];
      newRow.appendChild(newCell);
    }
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
  newHead.setAttribute('id', 'salesTableHead');
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

function makeTableBody() {
  // get a ref to the table
  var salesTable = document.getElementById('salesTable');
  // create a tbody
  var newTableBody = document.createElement('tbody');
  newTableBody.setAttribute('id', 'salesTableBody');
  // append newTableBody to salesTable
  salesTable.appendChild(newTableBody);
}

function getAllStoreSales() {
  // locations will hold the Store objects
  var locations = [];
  // stepping through locatioData
  for (let i = 0; i < storesData.length; i++) {
    // make a new store
    var store = new Store(storesData[i][0], storesData[i][1], storesData[i][2], storesData[i][3]);
    // I hoped to have the constructor for Store do this the IIFE way, but that's not working yet.
    store.getSalesByHour();
    locations.push(store);
  }
  return locations;
}

function renderResults(stores) {
  // loop through each store in stores and all its render method
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function makeTableFoot() {

}

makeTableHead();
makeTableBody();
var stores = getAllStoreSales();
renderResults(stores);
