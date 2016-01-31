var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var tableEl = document.getElementById("stores");
var stores = [];

function StoreSales(location, minCust, maxCust, avg) {
  this.name = location;
  this.customerMin = minCust;
  this.customerMax = maxCust;
  this.avg = avg;
  this.bake = [];
  this.total = 0;
  console.log(this.name);
  // Make this and the 2 for loops in to seperat prototype functions
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
    var row = document.createElement("tr");
    var storeName = document.createElement("th");
    storeName.textContent = this.name;
    tableEl.appendChild(row);
    row.appendChild(storeName)
    
    for (var i = 0; i < hours.length; i++) {
      var tdCookies = document.createElement('td');
      tdCookies.textContent = this.bake[i];
      row.appendChild(tdCookies);
    };
    var tdTotal = document.createElement('th');
    tdTotal.textContent = this.total;
    row.appendChild(tdTotal);
  };
  
  this.render();
};

//change function syntax

var clearFields = function(banana){
  banana.target.storeLocal.value = null;
  banana.target.minCustInput.value = null;
  banana.target.maxCustInput.value = null;
  banana.target.avgInput.value = null;
};

var formEl = document.getElementById("form");
formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event.target.storeLocal.value);
  var newStore = event.target.storeLocal.value;
  var newMin = event.target.minCustInput.value;
  var newMax = event.target.maxCustInput.value;
  var newAvg = event.target.avgInput.value;
  var newRow = event.target.storeLocal.value + "Row";
  new StoreSales(newStore, newMin, newMax, newAvg, newRow);
  clearFields(event);
});

var pike = new StoreSales("Pike Place", 17, 88, 5.2);
var seaTac = new StoreSales("SeaTac", 8, 24, 1.2);
var southcenter = new StoreSales("Southcenter", 11, 38, 1.9);
var bellsquare = new StoreSales("Bellevue Square", 20, 48, 3.3);
var alki = new StoreSales("Alki", 3, 24, 2.6);
