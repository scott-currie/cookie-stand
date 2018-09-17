'use strict';

var store1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  getRandomInRange: function(min, max) {
    var randInt = Math.ceil(Math.random() * (max - min));
    console.log('randInt:', randInt);
    return randInt;
  },
  salesByHour: [],
  getSalesByHour: function() {
    console.log('this: ', this.minCust, this.maxCust, this.avgCookiesPerSale);
    var sales = [];
    var salesThisHour = 0;
    for (var i = 0; i < 15; i++) {
      salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
      console.log('salesThisHour', salesThisHour);
      sales.push(Math.round(salesThisHour));
    }
    console.log('sales: ', sales);
    this.cookieSales = sales;
  }
};

var store2 = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerSale: 1.2,
  getRandomInRange: function(min, max) {
    var randInt = Math.ceil(Math.random() * (max - min));
    console.log('randInt:', randInt);
    return randInt;
  },
  salesByHour: [],
  getSalesByHour: function() {
    console.log('this: ', this.minCust, this.maxCust, this.avgCookiesPerSale);
    var sales = [];
    var salesThisHour = 0;
    for (var i = 0; i < 15; i++) {
      salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
      console.log('salesThisHour', salesThisHour);
      sales.push(Math.round(salesThisHour));
    }
    console.log('sales: ', sales);
    this.cookieSales = sales;
  }
};

var store3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
  getRandomInRange: function(min, max) {
    var randInt = Math.ceil(Math.random() * (max - min));
    console.log('randInt:', randInt);
    return randInt;
  },
  salesByHour: [],
  getSalesByHour: function() {
    console.log('this: ', this.minCust, this.maxCust, this.avgCookiesPerSale);
    var sales = [];
    var salesThisHour = 0;
    for (var i = 0; i < 15; i++) {
      salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
      console.log('salesThisHour', salesThisHour);
      sales.push(Math.round(salesThisHour));
    }
    console.log('sales: ', sales);
    this.cookieSales = sales;
  }
};

var store4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
  getRandomInRange: function(min, max) {
    var randInt = Math.ceil(Math.random() * (max - min));
    console.log('randInt:', randInt);
    return randInt;
  },
  salesByHour: [],
  getSalesByHour: function() {
    console.log('this: ', this.minCust, this.maxCust, this.avgCookiesPerSale);
    var sales = [];
    var salesThisHour = 0;
    for (var i = 0; i < 15; i++) {
      salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
      console.log('salesThisHour', salesThisHour);
      sales.push(Math.round(salesThisHour));
    }
    console.log('sales: ', sales);
    this.cookieSales = sales;
  }
};

var store5 = {
  name: 'Alki',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  getRandomInRange: function(min, max) {
    var randInt = Math.ceil(Math.random() * (max - min));
    console.log('randInt:', randInt);
    return randInt;
  },
  salesByHour: [],
  getSalesByHour: function() {
    console.log('this: ', this.minCust, this.maxCust, this.avgCookiesPerSale);
    var sales = [];
    var salesThisHour = 0;
    for (var i = 0; i < 15; i++) {
      salesThisHour = this.getRandomInRange(this.minCust, this.maxCust) * this.avgCookiesPerSale;
      console.log('salesThisHour', salesThisHour);
      sales.push(Math.round(salesThisHour));
    }
    console.log('sales: ', sales);
    this.cookieSales = sales;
  }
};
var locations = [store1, store2, store3, store4, store5];

for (var i = 0; i < locations.length; i++) {
  var loc = locations[i];
  loc.cookieSales = loc.getSalesByHour();
  loc.getSalesByHour();
  console.log(loc);
}
