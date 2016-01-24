var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var pikeList = document.getElementById('pike');
var seaTacList = document.getElementById('seaTac');
var southcenterList = document.getElementById('southcenter');
var bellesquareList = document.getElementById('bellsquare');
var alkiList = document.getElementById('alki');
var stores = []

function StoreSales(location, minCust, maxCust, avg, list) {
  this.name = location;
  this.customerMin = minCust;
  this.customerMax = maxCust;
  this.avg = avg
  this.list = list;
  this.bake = [];
  console.log(this.name)
  this.toBake = function() {
    var randomCust = Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin;
    var cookies = (Math.floor((randomCust * this.avg)));
    this.bake.push(cookies);
    console.log("customers = " + cookies);
  }
  for (var i = 0; i < hours.length; i++) {
    this.toBake();
  };
  this.total = 0
  for (var i = 0; i < this.bake.length; i++){
    this.total = this.total + this.bake[i];
  };
  stores.push(this);
  
  this.render = function() {
    for (var i = 0; i < hours.length; i++) {
    var liCookies = document.createElement('li');
    liCookies.textContent = hours[i] + this.bake[i];
    this.list.appendChild(liCookies);
    };
    var liTotal = document.createElement('li');
    liTotal.textContent = "Total: " + this.total;
    this.list.appendChild(liTotal);
  };
  this.render();
};

var pike = new StoreSales("pikePlace", 17, 88, 5.2, pikeList);
var seaTac = new StoreSales("seaTac", 8, 24, 1.2, seaTacList);
var southcenter = new StoreSales("southcenter", 11, 38, 1.9, southcenterList);
var bellsquare = new StoreSales("bellevue Square", 20, 48, 3.3, bellesquareList);
var alki = new StoreSales("alki", 3, 24, 2.6, alkiList);
