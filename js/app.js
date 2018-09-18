'use strict';

var locations = [
  {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCookiesPerSale: 6.3,
    totalSales: 0,
    getRandomInRange: function(min, max) {
      // return an int between min and max
      var randInt = Math.ceil(Math.random() * (max - min) + min);
      console.log(min, max, randInt);
      return randInt;
    },
    cookieSales: [], // holds our results
    getSalesByHour: function() {
      // loop through all 15 hours and add the randomized sales to cookieSales
      var salesThisHour = 0;
      for (var i = 0; i < 15; i++) {
        salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
        this.cookieSales.push(Math.round(salesThisHour));
        this.totalSales += salesThisHour;
      }
    }
  },

  {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerSale: 1.2,
    totalSales: 0,
    getRandomInRange: function(min, max) {
      // return an int between min and max
      var randInt = Math.ceil(Math.random() * (max - min) + min);
      console.log(min, max, randInt);
      return randInt;
    },
    cookieSales: [], // holds our results
    getSalesByHour: function() {
      // loop through all 15 hours and add the randomized sales to cookieSales
      var salesThisHour = 0;
      for (var i = 0; i < 15; i++) {
        salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
        this.cookieSales.push(Math.round(salesThisHour));
        this.totalSales += salesThisHour;
      }
    }
  },

  {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgCookiesPerSale: 3.7,
    totalSales: 0,
    getRandomInRange: function(min, max) {
      // return an int between min and max
      var randInt = Math.ceil(Math.random() * (max - min) + min);
      console.log(min, max, randInt);
      return randInt;
    },
    cookieSales: [], // holds our results
    getSalesByHour: function() {
      // loop through all 15 hours and add the randomized sales to cookieSales
      var salesThisHour = 0;
      for (var i = 0; i < 15; i++) {
        salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
        this.cookieSales.push(Math.round(salesThisHour));
        this.totalSales += salesThisHour;
      }
    }
  },

  {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCookiesPerSale: 2.3,
    totalSales: 0,
    getRandomInRange: function(min, max) {
      // return an int between min and max
      var randInt = Math.ceil(Math.random() * (max - min) + min);
      console.log(min, max, randInt);
      return randInt;
    },
    cookieSales: [], // holds our results
    getSalesByHour: function() {
      // loop through all 15 hours and add the randomized sales to cookieSales
      var salesThisHour = 0;
      for (var i = 0; i < 15; i++) {
        salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
        this.cookieSales.push(Math.round(salesThisHour));
        this.totalSales += salesThisHour;
      }
    }
  },

  {
    name: 'Alki',
    minCust: 23,
    maxCust: 65,
    avgCookiesPerSale: 6.3,
    totalSales: 0,
    getRandomInRange: function(min, max) {
      // return an int between min and max
      var randInt = Math.ceil(Math.random() * (max - min) + min);
      console.log(min, max, randInt);
      return randInt;
    },
    cookieSales: [], // holds our results
    getSalesByHour: function() {
      // loop through all 15 hours and add the randomized sales to cookieSales
      var salesThisHour = 0;
      for (var i = 0; i < 15; i++) {
        salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
        this.cookieSales.push(Math.round(salesThisHour));
        this.totalSales += salesThisHour;
      }
    }
  }
];

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
