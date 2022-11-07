'use strict';
const fs = require('fs');

for (var i =1; i <= 100; i++) {
    var asal = true;
    for (let j = 2; j <= i; j ++) {
        if( i % j ===0 && j !==i) {
                asal = false
        }
    }

    if(asal) {

        fs.appendFile('asal.txt', `${i},`, (err) => {
            if (err)
                throw err;
    
            console.log('Dosyaya Ekleme yapıldı');
        });

    }
}
