var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var sectionEl = document.getElementById("stores");
var stores = []

function StoreSales(location, minCust, maxCust, avg, list) {
  this.name = location;
  this.customerMin = minCust;
  this.customerMax = maxCust;
  this.avg = avg;
  this.list = list;
  this.bake = [];
  this.total = 0;
  console.log(this.name);
  
  this.toBake = function() {
    var randomCust = Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin;
    var cookies = (Math.floor((randomCust * this.avg)));
    this.bake.push(cookies);
    console.log("customers = " + cookies);
  };
  
  for (var i = 0; i < hours.length; i++) {
    this.toBake();
  };
  
  for (var i = 0; i < this.bake.length; i++){
    this.total = this.total + this.bake[i];
  };
 
  stores.push(this);
  
  this.render = function() {
    var storeName = document.createElement("h2");
    storeName.textContent = this.name;
    sectionEl.appendChild(storeName);
    this.list = document.createElement("ul");
    storeName.appendChild(this.list);
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

var pike = new StoreSales("Pike Place", 17, 88, 5.2, pikeList);
var seaTac = new StoreSales("SeaTac", 8, 24, 1.2, seaTacList);
var southcenter = new StoreSales("Southcenter", 11, 38, 1.9, southcenterList);
var bellsquare = new StoreSales("Bellevue Square", 20, 48, 3.3, bellesquareList);
var alki = new StoreSales("Alki", 3, 24, 2.6, alkiList);
