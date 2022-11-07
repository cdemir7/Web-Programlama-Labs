'use strict';
const fs = require('fs');
var data = fs.readFileSync('quiz6.txt', 'utf-8');
var chars=data.toString().split(",");
var lines=chars.toString().split("\n");


var x, a, b, c, A;


lines.forEach(item=>{
   var deger = item.split(',');

   x = Number(deger[0]);
   a = Number(deger[1]);
   b = Number(deger[2]);
   c = Number(deger[3]);

   A = a * (x*x) + b*x + c;
   console.log(A);

   
});




