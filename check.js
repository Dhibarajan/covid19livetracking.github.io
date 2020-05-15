var x = 98570954485093485;
var y = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
console.log(y);