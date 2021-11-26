let clothes = new Set(); //new bo clothes to nowy obiekt klasy set
clothes.add('sweter'); //dodaje
clothes.add('jeans'); //metosy są żółte a własności chyba fioletowe
clothes.add('sweter'); // nie doda bo już jest

//clothes.delete('sweter'); //usuwa

alert(clothes.has('sweter')); //jak jest to daje true
alert(clothes.has('drzewo')); // jak nie daje false
alert(clothes.size);

for(let item of clothes)
document.write(item + '<br>');
