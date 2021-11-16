/*const statement = "Nauka programowania jest ";
let choice = prompt("Co sądzisz o programowaiu");
console.log(statement + choice);*/
//łańcuch szablonowy pozwala wyświetlić wartość zmiennej wewnątrz stringa


let choice = prompt(`Co sądzisz o programowaiu`);
let statement = `Nauka programowania jest  ${choice}`; //te przecinki pod esc
console.log(statement);