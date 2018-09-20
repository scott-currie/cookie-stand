'use strict';

<<<<<<< HEAD
var store1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  totalSales: 0,
  getRandomInRange: function(min, max) {
    // return an int between min and max
    var randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(min, max, randInt);
    return randInt;
  },
  cookieSales: [], // holds our results
  getSalesByHour: function() {
=======
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
  this.getRandomInRange = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookieSales = []; // holds our results
  this.staffRequired = []; // staff required by hour
  this.dailyTotal = 0; // total for all sales today
  this.getSalesByHour = function() {
>>>>>>> 08425eb93274bd77d1b05e48dddd77210b652166
    // loop through all 15 hours and add the randomized sales to cookieSales
    var randCustomers = 0;
    for (var i = 0; i < hours.length; i++) {
      randCustomers = this.getRandomInRange(this.minCust, this.maxCust);
      var salesThisHour = randCustomers * this.avgSale;
      this.cookieSales.push(Math.round(salesThisHour));
      this.dailyTotal += salesThisHour;
      console.log(this.minCust, this.maxCust, randCustomers, this.avgSale, salesThisHour);
    }
  };
  this.getStaffRequired = function() {
    for (let i = 0; i < this.cookieSales.length; i++) {
      let cookies = this.cookieSales[i]; // friendly reference to cookieSales[i]
      var staffThisHour = 0;
      // still need 2 tossers, even if there are fewer than 20 sales
      if (cookies <= 20) {
        staffThisHour = 2;
      }
      else {
        // divide cookies needed by 20 and round up to get required staff
        staffThisHour = Math.ceil(cookies / 20);
      }
      // push staff required to array for later
      this.staffRequired.push(staffThisHour);
      // increment total
      this.totalStaff += staffThisHour;
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
    newCell.appendChild(document.createTextNode(this.name));
    // append newCell to newRow
    newRow.appendChild(newCell);
    // loop through sales
    for (var i = 0; i < this.cookieSales.length; i++) {
      newCell = document.createElement('td');
      newCell.appendChild(document.createTextNode(this.cookieSales[i]));
      newRow.appendChild(newCell);
    }
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(Math.round(this.dailyTotal)));
    newRow.appendChild(newCell);
  };
}

function makeTableHead(parentId, tableId, tHeadId) {
  // select the div where our table goes
  var tableArea = document.getElementById(parentId);
  // create the new table element
  var newTable = document.createElement('table');
  newTable.setAttribute('id', tableId);
  //append newTable to tableArea
  tableArea.appendChild(newTable);
  // create new head element
  var newHead = document.createElement('thead');
  newHead.setAttribute('id', tHeadId);
  //append newHead to newTable
  newTable.appendChild(newHead);
  // create an header row
  var newRow = document.createElement('tr');
  // create empty cell
  var newCell = document.createElement('th');
  // append empty newCell to newRow
  newRow.appendChild(newCell);
  for (var i = 0; i < hours.length; i++) {
    newCell = document.createElement('th');
    newCell.appendChild(document.createTextNode(hours[i]));
    newRow.appendChild(newCell);
  }
  // if tableId is "salesTable" add an additional column
  if (tableId === 'salesTable') {
    newCell = document.createElement('th');
    newCell.appendChild(document.createTextNode('Daily Total'));
    newRow.appendChild(newCell);
  }
  // append newRow to newHead
  newHead.appendChild(newRow);
}

function makeTableBody(tableId, tBodyId) {
  // If the body already exists, that's old data. We'll clear it
  if (document.getElementById(tBodyId)) {
    console.log('tBodyId');
    document.getElementById(tBodyId).remove();
  }
  // get a ref to the table
  var parentTable = document.getElementById(tableId);
  // create a tbody
  var newTableBody = document.createElement('tbody');
  newTableBody.setAttribute('id', tBodyId);
  // append newTableBody to salesTable
  parentTable.appendChild(newTableBody);
}

function makeTableFoot(tableId, tFootId, rowData) {
  // remove the footer element if it already exists
  if (document.getElementById(tFootId)) {
    document.getElementById(tFootId).remove();
  }
  // find our table
  var table = document.getElementById(tableId);
  // create a new foot element
  var newFoot = document.createElement('tfoot');
  newFoot.setAttribute('id', tFootId);
  // append newFoot to table
  table.appendChild(newFoot);
  // create a new row
  var newRow = document.createElement('tr');
  // append newRow to newFoot
  newFoot.appendChild(newRow);
  // create a new cell with Totals as textContent
  var newCell = document.createElement('td');
  newCell.appendChild(document.createTextNode('Totals'));
  //append newCell to newRow
  newRow.appendChild(newCell);
  // loop over rowData, creating a new td for each one
  for (let i = 0; i < rowData.length; i++) {
    // make a new td element with textContent equal the current value of rowData
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(rowData[i]));
    // append newCell to newRow
    newRow.appendChild(newCell);
  }
  // add cell for daily total
  newCell = document.createElement('td');
  newCell.appendChild(document.createTextNode(getDailyTotal()));
  newRow.appendChild(newCell);

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

function renderResults() {
  // loop through each store in stores and call its render method
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function getHourlyTotals() {
  let hourlyTotals = [];
  // loop through each hour
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    // in each hour, loop through each store, then add that hour's sales at that store to total
    for (var j = 0; j < stores.length; j++) {
      total += stores[j].cookieSales[i];
    }
    hourlyTotals.push(total);
  }
  return hourlyTotals;
}

function getDailyTotal() {
  let dailyTotal = 0;
  for (let i in stores) {
    dailyTotal += stores[i].dailyTotal;
  }
  return Math.ceil(dailyTotal);
}

function renderStaffingResults(tBodyId) {
  // clear the existing table body if it already exists
  if (document.getElementById(tBodyId)) {
    document.getElementById(tBodyId).innerHTML = '';
  }  
  // get a reference to our table body
  var tableBody = document.getElementById(tBodyId);
  for (let i = 0;i < stores.length;i++) {
    // create a new row element
    var newRow = document.createElement('tr');
    //append newRow to tableBody
    tableBody.appendChild(newRow);
    // create a new td element displaying store name
    var newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(stores[i].name));
    // append newCell to newRow
    newRow.appendChild(newCell);
    // loop through sales
    for (var j = 0; j < stores[i].staffRequired.length; j++) {
      newCell = document.createElement('td');
      newCell.appendChild(document.createTextNode(stores[i].staffRequired[j]));
      newRow.appendChild(newCell);
    }
  }
}

function logAllStores() {
  // loop through each store in stores and all its render method
  for (var i = 0; i < stores.length; i++) {
    console.log(stores[i]);
  }
}

function addNewStore(e) {
  e.preventDefault();
  var storeName = e.target.nameInputField.value;
  var minCustPerHour = parseInt(e.target.minCustInputField.value);
  var maxCustPerHour = parseInt(e.target.maxCustInputField.value);
  var avgSales = parseFloat(e.target.avgCustInputField.value);
  var newStore = new Store(storeName, minCustPerHour, maxCustPerHour, avgSales);
  // calculate sales for the new store
  newStore.getSalesByHour();
  // update sales totals for the day
  let hourlyTotals = getHourlyTotals();
  // find out required staff for the new store
  newStore.getStaffRequired();
  // push onto the store list
  stores.push(newStore);
  makeTableBody('salesTable', 'salesTableBody');
  renderResults();
  makeTableFoot('salesTable', 'salesTableFoot', hourlyTotals);
  clearForm();
  renderStaffingResults('staffingTableBody');
}

function clearForm() {
  var els = document.getElementsByTagName('input');
  for (var i = 0; i < els.length; i++) {
    els[i].value = '';
  }
}

var addStoreForm = document.getElementById('addStoreForm');
addStoreForm.addEventListener('submit', addNewStore);


makeTableHead('tableArea', 'salesTable', 'salesTableHead');
makeTableBody('salesTable', 'salesTableBody');
var stores = getAllStoreSales();
renderResults(stores);
var hourlyTotals = getHourlyTotals(stores);
makeTableFoot('salesTable', 'salesTableFoot', hourlyTotals);

// Let's try to stretch!
makeTableHead('staffingTableArea', 'staffingTable', 'staffingTableHead');
makeTableBody('staffingTable', 'staffingTableBody');
// calculate the staff required per store, per hour
var totalStaffByStore = [];
for (let i = 0; i < stores.length; i++) {
  stores[i].getStaffRequired();
  totalStaffByStore.push(stores[i].totalStaff);
}
renderStaffingResults('staffingTableBody');

logAllStores();
