'use strict';
const fs = require('fs');
var asal_sayi = fs.readFileSync('asal_sayi.txt', 'utf-8');
var splits_asal_sayi=asal_sayi.toString().split(",");
var dizi = [];

splits_asal_sayi.forEach(item=>{
    dizi.push(Number(item));
});
console.log(dizi)

var i = 1;
while(i<90){ 
    
    if(!(dizi.includes(i))){
        fs.appendFile('tum_sayilar.txt', `${i},`, (err) => {
            if (err)
                throw err;
    
            console.log('dosyaya ekleme yapıldı');
        });
    };
    
    i = i + 1;
}

   