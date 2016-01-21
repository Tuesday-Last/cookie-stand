var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = {
  customerMin: 17,
  cuntomerMax: 88,
  avg: 5.2
  bake: []
}

toBake = function(store) {
  var randomCust = Math.floor(Math.random() * (store.customerMax - store.customerMin + 1)) + store.customerMin;
  store.bake.push(randomCust * store.avg);
  }

for (hour in hours) {
  var liCookies = document.createElement('li');
  liCookies.textContent = hours[hour] + bake[cookies];
} 

.appendChild(liCookies);
