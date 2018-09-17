'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  cookieSales: getSalesByHour()
};

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookiesPerSale: 1.2,
  cookieSales: getSalesByHour()
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
  cookieSales: getSalesByHour()
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
  cookieSales: getSalesByHour()
};

var alki = {
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  cookieSales: getSalesByHour()
};

var allLocations = [firstAndPike, seatac, seattleCenter, capitolHill, alki];

function getRandomInRange(min, max) {
  return Math.ceil(Math.random() * (max + 1 - min));
}

function getSalesByHour(min, max, avgSale) {
  sales = [];
  for (var i = 0; i < 15;i++) {
    sales.push(getSalesByHour(min, max) * avgSale);
  }
  return sales;
}
