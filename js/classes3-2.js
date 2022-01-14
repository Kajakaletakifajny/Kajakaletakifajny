class student {

    #name ='Piotr';
    #surname = "Bak";
    #PESEL = "1111111111";

    constructor(name, surname, PESEL) {
        this.#name=name;
        this.#surname=surname;
        this.#PESEL=PESEL;
    }

    getName = function(){
        return this.#name;
    }

    getSurname(){
        return this.#surname;
    }

    #getPESEL(){
        return this.#PESEL;
    }

    display(){
        document.write(`Imie: ${this.#name} <br> Nazwisko: ${this.#surname} <br> PESEL: ${this.#PESEL}`);
    }

    what(){
        this.#name = prompt("Podaj imie");
        this.#surname = prompt("Podaj nazwisko");
        this.#PESEL = prompt("Podaj pesel");
    }

    getBob()
    {
        let pesel = this.#getPESEL().slice(0,6);
        let rok = 20 + pesel.slice(0,2);
        let mies = pesel.slice(2,4);
        let dzien = pesel.slice(4,6);

        if(mies>20){
            rok = 20 + pesel.slice(0,2);
            mies = +pesel.slice(2,4) - 21;}
        else if (mies<13){
            rok = 19 + pesel.slice(0,2);
            mies = +pesel.slice(2,4);}

        let miesnazw = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"]

        return `<br>Dzień: ${dzien}<br>Miesiąc: ${miesnazw[mies]}<br>Rok: ${rok}`;
    }
}

let Student = new student('Bob', 'marley', '033027');
Student.what();
Student.display();
document.write(Student.getBob());
/*var str='bobak';
document.write(str.slice(1,4) + '<br>');
document.write(str.substring(1,4));*/