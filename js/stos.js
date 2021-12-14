let myFish = ["aniol","klaun","mandarynka","chirurg"];

document.writeln('myFish ' + myFish + '<br>');

removed = myFish.splice(3,1, 'trąba');

document.writeln('Po usunięciu 1 elementu: ' + myFish + '<br>');

document.writeln("Usunięty jest element: " + removed + '<br>');