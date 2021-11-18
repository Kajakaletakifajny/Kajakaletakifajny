class warzywo
{
    name = 'namespace';
    price = '0';
    amount_in_storage = '0';
}

let warzywa = new Array(3);

for(let i=0; i<3; i++)
{
    warzywa[i] = new warzywo;
    warzywa[i].name = prompt("Podaj nazwę warzywa ");
    warzywa[i].price = prompt("Podaj cenę ");
    warzywa[i].amount_in_storage = prompt("Podaj ilość w magazynie ");
}


let choice = prompt("Podaj czego szukasz");
let choice2 = prompt("Podaj od jakiej ceny szukane warzywo ma być mniejsze")
let = 0;

/*
for(let i=0; i<3; i++)
{
    if (choice === warzywa[i].name)
    {
        document.write(`Warzywo ${warzywa[i].name}<br>`);
        document.write(`Kosztuje ${warzywa[i].price} złotych<br>`);
        document.write(`Mamy na stanie ${warzywa[i].amount_in_storage} sztuk<br>`);
        n=1;
    }
    else if(n!=1)
    {
        document.write("Nie znaleźliśmy tego");
    }
}*/

for(let i=0; i<3; i++)
{
    if (choice2 >= warzywa[i].price)
    {
        document.write(`Warzywo ${warzywa[i].name}<br>`);
        document.write(`Kosztuje ${warzywa[i].price} złotych<br>`);
        document.write(`Mamy na stanie ${warzywa[i].amount_in_storage} sztuk<br>`);
        n=1;
    }
    else if(n!=1)
    {
        document.write("Nie znaleźliśmy tego");
    }
}









/*let wybor = new warzywo;
let wybory = [wybor];

let i = prompt("Podaj liczbę");
let wyszukiwanie = prompt("Podaj czego szukasz");

//(for i=0; i<.length; i++)
alert("Nazwa owocu " + wybor.name[i-1]);
alert("Ilośc w magazynie " + wybor.amount_in_storage[i-1]);
alert("Jakość owocu " + wybor.quality[i-1]);
alert("Termin ważności " + wybor.deadline[i-1]);
*/