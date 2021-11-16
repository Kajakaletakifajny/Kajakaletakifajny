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
komora.sendSms("Nie ide jutro do szkoly");

document.write(komora.sms);
alert("Model telefonu: " + komora.brand);
alert("Cena telefonu: " + komora.price);
alert("Kolor telefonu: " + komora.color);