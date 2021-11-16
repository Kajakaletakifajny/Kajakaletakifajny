//Warzywniak


const answerFruit = prompt("Jakiego owocu szukasz? (Proszę pisać małymi literami)");
let fruits = ["anans", "banan", "arbuz", "truskawka", "jabłko", "cytryna", "kiwi", "pomarańcz"]; //Tablica z owocami
let fruitPrice = ["4,30","1,50","4,60","1,20","1,50","2,10","2,40","2,30"]; //Tablica z cenami
let n;


for(let i=0; i<fruits.length; i++)
    if(answerFruit === fruits[i])
    {
        alert("Mam ten owoc");
        n = 1;
        alert(`Jego cena wynosi ${fruitPrice[i]}`);
    }

    if(n !== 1)
        alert("Nie mamy takiego owocu");