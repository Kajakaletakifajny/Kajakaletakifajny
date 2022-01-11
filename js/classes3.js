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
        document.write();
    }
}