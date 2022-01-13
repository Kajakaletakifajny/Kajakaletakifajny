let pd = prompt('Podaj rok');
let tc = prompt('Podaj miesiąc urodzenia(liczbą)');
let ps = prompt('Podaj dzień urodzenia');

pd = pd.substring(2);
tc = +tc + 20;

document.write(`${pd}${tc}${ps}`);
