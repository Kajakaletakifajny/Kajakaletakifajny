class Room
{
    width = 200;
    length = 220;
    desk = false;
    space = function ()
    {
        return this.width * this.length;
    }
    display = function ()
    {
        document.write(`szerokość ${this.width}, długość ${this.length}, powierzchnia ${this.space()}, czy ma biurko ${this.desk}`);
    }
}

const room = new Room();
document.write(room.display());