'use strict';

var Store = function(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.getRandInRange = function() {
    //random logi
  };
  this.render = function() {
    //render stuff
  };
  this.cookieSales = []; // holds our results
  this.getSalesByHour = (function() {
    // loop through all 15 hours and add the randomized sales to cookieSales
    var salesThisHour = 0;
    for (var i = 0; i < 15; i++) {
      salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
      this.cookieSales.push(Math.round(salesThisHour));
      this.totalSales += salesThisHour;
    }
  })();
};

var locationData = [
  ['1st and Pike', 23, 65, 6.3],
  ['SeaTac Airport', 3, 24, 1.2],
  ['Seattle Center', 11, 38, 3.7],
  ['Capitol Hill', 20, 38, 2.3],
  ['Alki', 23, 65, 6.3]
];

var locations = [];

for (let i = 0; i < locationData.length; i++) {
  locations.push(Store(locationData[0], locationData[1], locationData[2], locationData[3]));
}

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

for (var i = 0; i < locations.length; i++) {
  var loc = locations[i]; // get a nicer reference to our location object
  // do the sales calculation
  loc.getSalesByHour();
  // figure out which element id to look for
  var listId = 'store' + (i + 1);
  // get the ul with the correct id
  var storeList = document.getElementById(listId);
  // set ul text to location name
  storeList.textContent = loc.name;
  // loop through cookieSales and create a new child li for each item
  for (var j = 0; j < loc.cookieSales.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[j] + ': ' + loc.cookieSales[j];
    storeList.appendChild(listItem);
  }
  listItem.textContent = 'Total: ' + Math.round(loc.totalSales);
}
