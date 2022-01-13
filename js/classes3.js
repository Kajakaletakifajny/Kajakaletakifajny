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

    getBob()
    {
        return this.#getPESEL.splice(0,6);
    }
}

//let Student = new student('bob', 'marley', '1231241');//tu już wpisujemy w kodzie
let pd = prompt('Podaj rok');
let tc = prompt('Podaj miesiąc urodzenia(liczbą)');
let ps = prompt('Podaj dzień urodzenia');

pd = pd.substring(2);
tc = +tc + 20;
cPESEL=pd+tc+ps;

let Student = new student(prompt("Podaj imie"),prompt("Podaj nazwisko"),cPESEL);//tu możemy sobie sami wpisać
/*Student.#name = prompt("Podaj imie ");
Student.#surname = prompt("Podaj nazwisko ");
Student.#PESEL = prompt("Podaj PESEL ");*/ // nie pójdzie bo prywatne
Student.display();