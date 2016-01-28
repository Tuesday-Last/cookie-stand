var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var tableEl = document.getElementById("stores");
var stores = [];

function StoreSales(location, minCust, maxCust, avg, list) {
  this.name = location;
  this.customerMin = minCust;
  this.customerMax = maxCust;
  this.avg = avg;
  this.row = list;
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
    this.row = document.createElement("tr");
    var storeName = document.createElement("th");
    storeName.textContent = this.name;
    tableEl.appendChild(this.row);
    this.row.appendChild(storeName)
    
    for (var i = 0; i < hours.length; i++) {
      var tdCookies = document.createElement('td');
      tdCookies.textContent = this.bake[i];
      this.row.appendChild(tdCookies);
    };
    var liTotal = document.createElement('li');
    liTotal.textContent = this.total;
    this.row.appendChild(liTotal);
  };
  
  this.render();
};

var pike = new StoreSales("Pike Place", 17, 88, 5.2, "pikeRow");
var seaTac = new StoreSales("SeaTac", 8, 24, 1.2, "seaTacRow");
var southcenter = new StoreSales("Southcenter", 11, 38, 1.9, "southcenterRow");
var bellsquare = new StoreSales("Bellevue Square", 20, 48, 3.3, "bellesquareRow");
var alki = new StoreSales("Alki", 3, 24, 2.6, "alkiRow");
