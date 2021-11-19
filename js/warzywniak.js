class warzywo
{
    name = 'namespace';
    price = '0';
    amount_in_storage = '0';
}

let warzywa = new Array(3);
let n=0;

for(let i=0; i<3; i++)
{
    warzywa[i] = new warzywo;
    warzywa[i].name = prompt("Podaj nazwę warzywa ");
    warzywa[i].price = prompt("Podaj cenę ");
    warzywa[i].amount_in_storage = prompt("Podaj ilość w magazynie ");
}

let choice_what = prompt("Czy chesz znaleźć produkt za pomocą nazwy(x), ceny(y) albo ilości w magazynie(z)");


if(choice_what === "x" || choice_what === "X" )
{
    let choice = prompt("Podaj czego szukasz");

    for(let i=0; i<3; i++) {
        if (choice == warzywa[i].name) {
            document.write(`Warzywo ${warzywa[i].name}<br>`);
            document.write(`Kosztuje ${warzywa[i].price} złotych<br>`);
            document.write(`Mamy na stanie ${warzywa[i].amount_in_storage} sztuk<br>`);
            n = 1;
        }
        else if(n!=1)
        {
            document.write("Nie znaleźliśmy tego");
        }
    }
}

else if(choice_what === "y" || choice_what === "Y" )
{
    let choice2 = prompt("Podaj od jakiej ceny szukane warzywo ma być mniejsze");

    for(let i=0; i<3; i++) {
        if (+choice2 >= warzywa[i].price) {
            document.write(`Warzywo ${warzywa[i].name}<br>`);
            document.write(`Kosztuje ${warzywa[i].price} złotych<br>`);
            document.write(`Mamy na stanie ${warzywa[i].amount_in_storage} sztuk<br>`);
            n = 1;
        }
        else if(n!=1)
        {
            document.write("Nie znaleźliśmy tego");
        }
    }
}


else if(choice_what === "z" || choice_what === "Z" )
{
    let choice3 = prompt("Podaj ile sztuk ci potrzeba");

    for(let i=0; i<3; i++) {
        if (+choice3 <= warzywa[i].amount_in_storage) {
            document.write(`Warzywo ${warzywa[i].name}<br>`);
            document.write(`Kosztuje ${warzywa[i].price} złotych<br>`);
            document.write(`Mamy na stanie ${warzywa[i].amount_in_storage} sztuk<br>`);
            n = 1;
        }

    }
    if(n!=1)
    {
        document.write("Nie znaleźliśmy tego");
    }
}





/*let choice = prompt("Podaj czego szukasz");
let choice2 = prompt("Podaj od jakiej ceny szukane warzywo ma być mniejsze");
let choice3 = prompt("Podaj ile szukasz");
let = 0;*/




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