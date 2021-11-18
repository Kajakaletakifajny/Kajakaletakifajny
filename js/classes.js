class Phone
{
    brand = "Samsung";
    color = "black";
    price = 123.21;
    usbC = false;
    user = "Marcin";
    sendSms = function(text)
    {
        this.sms = this.user + " wysłał sms: " + text;
    }
}

let komora = new Phone;

let text = prompt("Podaj treść smsa");
komora.sendSms(text);
/*
document.write(komora.sms);
alert("Model telefonu: " + komora.brand);
alert("Cena telefonu: " + komora.price);
alert("Kolor telefonu: " + komora.color);
*/