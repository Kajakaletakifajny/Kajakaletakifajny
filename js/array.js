/*let tablica = [12.0, 8, 47, 9.32];
alert(`Pierwszy element tablicy ${tablica[0]}`); // `-ten znak jest pod tyldą, zapisuje zmienną i tekst
alert("Drugi element tablicy " + tablica[1]);
alert(`Długość tablicy ${tablica.length}`);
tablica.push(7);
alert("Piąty element tablicy " + tablica[4]);
alert(`Długość tablicy ${tablica.length}`);

tablica[1]=7;
alert("Cała tablica: " + tablica);*/

/*
const titleAndAuthor=[['Gdziekolwiek','Edward Stachura'],['Wyspa','Jan Kofta'],['Życie','Jan Twardowski']];

alert(titleAndAuthor[2][1]);
alert(titleAndAuthor.length);
alert(titleAndAuthor);

for(let i=0; i<3; i++)
{
    alert(`tytuł wiersza ${titleAndAuthor[i][0]} autor wiersza ${titleAndAuthor[i][1]}`);
}

for(let i=0; i<3; i++)
{
    for(let k=0; k<2; k++)
        alert(titleAndAuthor[i][k]);
}
*/

/*
let suma=0;
let liczby = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<liczby.length; i++)
{
    suma += liczby[i];
}
alert(suma);

for(let cyfra of liczby)//zmienna cyfra przyjmuje wszystkie kolejne wartości liczby
    suma += cyfra;
alert(suma);*/

let zdanie = "bob jest bobem";
for(let znak of zdanie)
    alert(znak);

for(let i=0; i<zdanie.length; i++)
    alert(zdanie[i]);