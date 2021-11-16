/*for(let i=1;i<=30;i++)
    alert(i); */

/*const streets = ["Malinowa", "Słoneczna", "Szpitalna", "Takowa"];
for(let i=0; i<streets.length; i++)
    alert(streets[i]);*/

/*
const shoesSize = 39;
const price = 230;

//const answerSize = prompt("Jaki jest dostępny rozmiar buta?");
const answerPrice = prompt("Ile kosztują buty?");
let colorOfShoes = ["red", "blue", "pink", "green", "yellow", "grey", "black", "white"];
let sizeOfShoes = ["38","39","40","41","42"];
let n,m;
let canBuy;*/

/*if(+answerSize === 39 && answerPrice <= 230)
    canBuy = true;*/

/*if(true === true)
{
    alert("Możesz kupić te buty");
    let colorBuyer = prompt("Jakiego koloru pragniesz?");
    for(let i=0; i<colorOfShoes.length; i++)
        if(colorOfShoes[i] === colorBuyer)
        {
            alert("Mamy twój kolor");
            n = 1;
        }
        if(n !== 1)
            alert("Nie ma takiego koloru");

    const answerSize = prompt("Jakiego rozmiaru pragniesz?");
    for(let i=0; i<sizeOfShoes.length; i++)
        if(answerSize === sizeOfShoes[i])
        {
            alert("Mamy twój rozmiar");
            m = 1;
        }
        if(m !== 1)
            alert("Nie ma takiego rozmiaru");
}*/

/*
else if(+answerSize !== 39 && answerPrice > 230)
    alert("Twój rozmiar buta nie jest równy 39 i cena przekracza 230łotych");
else if(+answerSize !== 39 && answerPrice <= 230)
    alert("Twój rozmiar nie jest równy 39");
else if(+answerSize === 39 && answerPrice >230)
    alert("Cena przekracza 230 złotych");
 */

let i=9;
while(i>=0)
{
    alert(i);
    i--;
}

i=9;
do
{
    document.write(i);
    i--;
}
while(i>=1)