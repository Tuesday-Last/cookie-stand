var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var tableEl = document.getElementById("stores");
var stores = [];

CookiePredictor.prototype.toBake = function() {
  var randomCust = Math.random() * (this.customerMax - this.customerMin + 1) + this.customerMin;
  var cookies = (Math.floor((randomCust * this.avg)));
  this.bake.push(cookies);
};

CookiePredictor.prototype.cookiesPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.toBake();
  }
};

CookiePredictor.prototype.cookiesTotal = function(){
  for (var i = 0; i < this.bake.length; i++){
    this.total = this.total + this.bake[i];
};
}

CookiePredictor.prototype.render = function() {
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

function CookiePredictor(location, minCust, maxCust, avg) {
  this.name = location;
  this.customerMin = minCust;
  this.customerMax = maxCust;
  this.avg = avg;
  this.bake = [];
  this.total = 0;

  this.cookiesPerHour();
  this.cookiesTotal();
  stores.push(this);
  
  this.render();
};

function clearFields(event){
  event.target.storeLocal.value = null;
  event.target.minCustInput.value = null;
  event.target.maxCustInput.value = null;
  event.target.avgInput.value = null;
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
  new CookiePredictor(newStore, newMin, newMax, newAvg, newRow);
  clearFields(event);
});

var pike = new CookiePredictor("Pike Place", 17, 88, 5.2);
var seaTac = new CookiePredictor("SeaTac", 8, 24, 1.2);
var southcenter = new CookiePredictor("Southcenter", 11, 38, 1.9);
var bellsquare = new CookiePredictor("Bellevue Square", 20, 48, 3.3);
var alki = new CookiePredictor("Alki", 3, 24, 2.6);
