/*let pd = prompt('Podaj rok');
let tc = prompt('Podaj miesiąc urodzenia(liczbą)');
let ps = prompt('Podaj dzień urodzenia');

pd = pd.substring(2);
tc = +tc + 20;

document.write(`${pd}${tc}${ps}`);*/



let pesel = prompt("Podaj PESEL");

//let rok = 20 + pesel.slice(0,2);
let mies = pesel.slice(2,4);
//let miesnazw = "";
let dzien = pesel.slice(4,6);
let rok=0;

let miesnazw = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"]

if(mies>20){
    rok = 20 + pesel.slice(0,2);
    mies = pesel.slice(2,4) - 21;}
else if (mies<13){
    rok = 19 + pesel.slice(0,2);
    mies = pesel.slice(2,4);}

document.write(miesnazw[mies]);


/*if(+mies==1)
    miesnazw = "Styczeń";
else if(+mies==2)
    miesnazw = "Luty";
else if(+mies==3)
    miesnazw = "Marzec";
else if(+mies==4)
    miesnazw = "Kwiecień";
else if(+mies==5)
    miesnazw = "Maj";
else if(+mies==6)
    miesnazw = "Czerwiec";
else if(+mies==7)
    miesnazw = "Lipiec";
else if(+mies==8)
    miesnazw = "Sierpień";
else if(+mies==9)
    miesnazw = "Wrzesień";
else if(+mies==10)
    miesnazw = "Październik";
else if(+mies==11)
    miesnazw = "Listopad";
else if(+mies==12)
    miesnazw = "Grudzień";*/

document.write("Rok twojego urodzenia to: " + rok + '<br>');
document.write("Miesiąc twojego urodzenia to: " + miesnazw[mies] + '<br>');
document.write("Dzień twojego urodzenia to: " + dzien + '<br>');
document.write(`Urodziłeś/aś się ${dzien} ${miesnazw[mies]} ${rok} roku`);