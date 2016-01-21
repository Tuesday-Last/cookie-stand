var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var pikeList = document.getElementById('pike');
var pikePlace = {
  customerMin: 17,
  customerMax: 88,
  avg: 5.2,
  bake: [],
  }

toBake = function(store) {
  var randomCust = Math.floor(Math.random() * (store.customerMax - store.customerMin + 1)) + store.customerMin;
  store.bake.push(Math.floor((randomCust * store.avg)));
  console.log("customers = " + randomCust);
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
