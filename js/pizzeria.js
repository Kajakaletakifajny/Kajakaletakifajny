class Pizza
{
    ilesera = 100;
    ileszynki = 100;
    ileszpinaku = 100;
    wegetarianska = false;

    cena = function ()
    {
        return cenasera / 100 * csera + cenaszynki / 100 * cszynki + cenaszpianku / 100 * cszpianku + cenaciastaisosu;
    }

    kalorie = function()
    {
        return ksera / 100 * csera + kszynki / 100 * cszynki + kszpinaku / 100 * cszpianku + kciasta;
    }

}
let pizza = new Pizza(); //new bo pizza to nowy obiekt klasy Pizza; new Pizza() jest to konstruktor

//ceny składników wiem że bardzo ale to bardzo niezoptymalizowane
cenaciastaisosu = 7;
cenasera = 5;
cenaszynki = 6.25;
cenaszpianku = 6;
//kalorie składników
kciasta = 300;
ksera = 402;
kszynki = 145;
kszpinaku = 34;

let csera = prompt("Ile chcesz procent sera?");
let cszynki = prompt("Ile chcesz procent szynki?");
let cszpianku = prompt("Ile chcesz procent szpinaku?");


document.write(`Cena pizzy kosztuje ${pizza.cena()} złotych <br>`);
document.write(`Kalorie w pizzy to ${pizza.kalorie()} kcal <br>`);

if(cszynki == 0)
    document.write("Pizza jest wegetariańska");
else
    document.write("Pizza nie jest wegetariańska");

