class warzywo
{
    name = 'namespace';
    price = '0';
    amount_in_storage = '0';

    display = function()
    {
        document.write(`${this.name} <br>`)
        document.write(`${this.price} złotych <br>`)
        document.write(`${this.amount_in_storage} sztuk<br>`)
    }

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

let choice_what = prompt("Czy chesz znaleźć produkt za pomocą nazwy(x), ceny(y), ilości w magazynie(z) albo wszystko(w)");

if(choice_what === "w" || choice_what === "W" )
{
    for(let i=0; i<3; i++)
    {
        warzywa[i].display();
    }
}
