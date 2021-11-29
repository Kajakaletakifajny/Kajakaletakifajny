class warzywo
{
    name = 'namespace';
    price = '0';
    amount_in_storage = '0';
}

let n=0;
let warzyw = new Set();

let por = new warzywo;
por.name = 'por';
por.price = 2;
por.amount_in_storage = 40;

warzyw.add(por);

let marchew = new warzywo;
marchew.name = 'marchew';
marchew.price = 0.5;
marchew.amount_in_storage = 70;

warzyw.add(marchew);

let pomidor = new warzywo;
pomidor.name = 'pomidor';
pomidor.price = 0.4;
pomidor.amount_in_storage = 57;

warzyw.add(pomidor);

let choice_what = prompt("Podaj za pomocą czego chcesz wyszukać?");

//looking from name
if(choice_what === "nazwa") {
    let choice = prompt("Podaj czego szukasz");

    for (let item of warzyw) {
        if (choice === item.name) {
            document.write(item.name + '<br>');
            document.write(item.price + ' złotych za sztukę <br>');
            document.write(item.amount_in_storage + ' sztuk <br><br>');
            n = 1;
        }
    }

    if(n!=1)
    {
        document.write("Nie ma takiego<br>");
        n=1;
    }
}

//looking from price
if(choice_what === "cena") {
    let choice2 = prompt("Jaką cenę szukasz");

    for (let item of warzyw) {
        if (+choice2 >= item.price) {
            document.write(item.name + '<br>');
            document.write(item.price + ' złotych za sztukę <br>');
            document.write(item.amount_in_storage + ' sztuk <br><br>');
            n = 1;
        }
    }

    if(n!=1)
    {
        document.write("Nie ma takiego<br>");
        n=1;
    }
}

//looking from amount
if(choice_what === "ilosc") {
    let choice3 = prompt("Ile szukasz");

    for (let item of warzyw) {
        if (+choice3 <= item.amount_in_storage) {
            document.write(item.name + '<br>');
            document.write(item.price + ' złotych za sztukę <br>');
            document.write(item.amount_in_storage + ' sztuk <br><br>');
            n = 1;
        }
    }

    if(n!=1)
    {
        document.write("Nie ma takiego<br>");
        n=1;
    }
}


document.write("-----------------------------<br>");
for(let item of warzyw)
{
    document.write(item.name + '<br>');
    document.write(item.price + ' złotych za sztukę <br>');
    document.write(item.amount_in_storage + ' sztuk <br><br>');
}