/*if('7' == 7)
{
    alert("wartości są sobie równe"); // oczywiście nie trzeba dawać tego znaku ;
}

if('7' !== 7)
{
    alert("wartości są sobie równe, ale typy nie\
    po lewej stronie jest String, a po prawej liczba");
}*/

/*const dayOfBirth = 14;
const guess = prompt("Zgadnij dzień moich urodzin");

let correct = false;

if (+guess === dayOfBirth)
correct = true;

if(correct === true)
{
    alert(`zgadza się, dzień moich urodzin to: ${dayOfBirth}`);
    document.write("BRAWO!")
}

if(correct === false)
{
    alert("nie dalej");
    document.write("Odśwież stronę, by spróbować jeszcze raz")
}*/

/*
//Krótsza wersja robiona przeze mnie
const dayOfBirth = 14;
const guess = prompt("Zgadnij dzień moich urodzin");

if(dayOfBirth === +guess) //+ zmienia stringa na liczbę, ponieważ dayOfBirth to int a guess int
{
    alert(`zgadza się, dzień moich urodzin to: ${dayOfBirth}`);
    document.write("BRAWO!")
}
else
{
    alert("nie dalej");
    document.write("Odśwież stronę, by spróbować jeszcze raz")
}*/

/*
//Instrukcja warunkowa AND
const shoesSize = 39;
const price = 230;

const answerSize = prompt("Jaki jest dostępny rozmiar buta?");
const answerPrice = prompt("Ile kosztują buty?");
const color = 'czarne';
const color2 = "białe";

let canBuy;

if(+answerSize === 39 && answerPrice <= 230)
    canBuy = true;

if(canBuy === true)
{
    alert("Możesz kupić te buty");
    let colorBuyer = prompt("Jakiego koloru pragniesz?");
    if(colorBuyer === "czarne" || colorBuyer === "białe")
        alert("Buty które chcesz są na stanie");
    else
        alert("Nie ma takiego koloru");
}
else if(+answerSize !== 39 && answerPrice > 230)
    alert("Twój rozmiar buta nie jest równy 39 i cena przekracza 230łotych");
else if(+answerSize !== 39 && answerPrice <= 230)
    alert("Twój rozmiar nie jest równy 39");
else if(+answerSize === 39 && answerPrice >230)
    alert("Cena przekracza 230 złotych");*/


const score = prompt("Ile punktów uzyskano?");
let grade;


if(score > 90)
    grade = 5;
else if(score > 80)
    grade = 4;
else if(score > 70)
    grade = 3;
else if(score > 60)
    grade = 2;
else
    grade = 1;

alert(`Twoja ocena to ${grade}`);
