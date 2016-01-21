var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var pikeList = document.getElementById('pike');
var seaTacList = document.getElementById('seaTac');
var southcenterList = document.getElementById('southcenter');
var bellesquareList = document.getElementById('bellsquare');
var alkiList = document.getElementById('alki');

toBake = function(store) {
  var randomCust = Math.floor(Math.random() * (store.customerMax - store.customerMin + 1)) + store.customerMin;
  store.bake.push(Math.floor((randomCust * store.avg)));
  console.log("customers = " + randomCust);
  }

//Pike Place
var pikePlace = {
  customerMin: 17,
  customerMax: 88,
  avg: 5.2,
  bake: [],
  }

for (var i =0; i < hours.length; i++) {
  toBake(pikePlace);
} 

for (var i =0; i < hours.length; i++) {
  var liCookies = document.createElement('li');
  liCookies.textContent = hours[i] + pikePlace.bake[i];
  pikeList.appendChild(liCookies);
} 

var pikePlaceTotal = 0
for (var i = 0; i < pikePlace.bake.length; i++){
  pikePlaceTotal = pikePlaceTotal + pikePlace.bake[i];
  }

var liTotal = document.createElement('li');
  liTotal.textContent = "Total: " + pikePlaceTotal;
  pikeList.appendChild(liTotal);

//seatac
console.log("SeaTac")
var seaTac = {
  customerMin: 8,
  customerMax: 24,
  avg: 1.2,
  bake: [],
  }

for (var i =0; i < hours.length; i++) {
  toBake(seaTac);
} 

for (var i =0; i < hours.length; i++) {
  var liCookiesSea = document.createElement('li');
  liCookiesSea.textContent = hours[i] + seaTac.bake[i];
  seaTacList.appendChild(liCookiesSea);
} 

var seaTacTotal = 0
for (var i = 0; i < seaTac.bake.length; i++){
  seaTacTotal = seaTacTotal + seaTac.bake[i];
  }

var liTotal = document.createElement('li');
  liTotal.textContent = "Total: " + seaTacTotal;
  seaTacList.appendChild(liTotal);

//Southcenter
console.log("Southcenter")
var southcenter = {
  customerMin: 11,
  customerMax: 38,
  avg: 1.9,
  bake: [],
}

for (var i =0; i < hours.length; i++) {
  toBake(southcenter);
} 

for (var i =0; i < hours.length; i++) {
  var liCookies = document.createElement('li');
  liCookies.textContent = hours[i] + southcenter.bake[i];
  southcenterList.appendChild(liCookies);
} 

var southcenterTotal = 0
for (var i = 0; i < southcenter.bake.length; i++){
  southcenterTotal = southcenterTotal + southcenter.bake[i];
  }

var liTotal = document.createElement('li');
  liTotal.textContent = "Total: " + southcenterTotal;
  southcenterList.appendChild(liTotal);

//Bellevue Square
console.log("Bellevue Square");
var bellesquare = {
  customerMin: 20,
  customerMax: 48,
  avg: 3.3,
  bake: [],
}

for (var i =0; i < hours.length; i++) {
  toBake(bellesquare);
} 

for (var i =0; i < hours.length; i++) {
  var liCookies = document.createElement('li');
  liCookies.textContent = hours[i] + bellesquare.bake[i];
  bellesquareList.appendChild(liCookies);
} 

var bellesquareTotal = 0
for (var i = 0; i < bellesquare.bake.length; i++){
  bellesquareTotal = bellesquareTotal + bellesquare.bake[i];
  }

var liTotal = document.createElement('li');
  liTotal.textContent = "Total: " + bellesquareTotal;
  bellesquareList.appendChild(liTotal);

//Alki
console.log("Alki");
var alki = {
  customerMin: 20,
  customerMax: 48,
  avg: 3.3,
  bake: [],
}

for (var i =0; i < hours.length; i++) {
  toBake(alki);
} 

for (var i =0; i < hours.length; i++) {
  var liCookies = document.createElement('li');
  liCookies.textContent = hours[i] + alki.bake[i];
  alkiList.appendChild(liCookies);
} 

var alkiTotal = 0
for (var i = 0; i < alki.bake.length; i++){
  alkiTotal = bellesquareTotal + alki.bake[i];
  }

var liTotal = document.createElement('li');
  liTotal.textContent = "Total: " + alkiTotal;
  alkiList.appendChild(liTotal);
