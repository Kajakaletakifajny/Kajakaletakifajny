class winda
{
    number_of_people = 12;
    height = 250;
    length_x =  140;
    length_z = 170;
    ride = function(what)
    {
        document.write(`Dojechałeś na ${what} piętro`)
    }
}

let jazda = new winda;

what = prompt("Na jakie piętro chcesz jechać?");

for(let i=0; i<(15*what); i++)
{
    document.write("brrrrr <br>");
}

jazda.ride(what);