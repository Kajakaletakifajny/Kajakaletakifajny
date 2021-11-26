class warzywo
{
    name = 'namespace';
    price = '0';
    amount_in_storage = '0';
}

let warzyw = new Set();

let por = new warzywo;
por.name = 'por';
por.price = 2;
por.amount_in_storage = 40;

warzyw.add(por);


for(let item of warzyw)
    document.write(item + '<br>');