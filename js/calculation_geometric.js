class SquareBasedPyramid // 1/3 x base area x height
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;
    radiusorlength;
    name="SquareBasedPyramid";
    multiplier = 1/3;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength;
    }
}
class Cone              // 1/3 x base area x height (base area = pi r r)
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;
    radiusorlength;
    name="Cone";
    multiplier = 1/3;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength*Math.PI;
    }
}
class Cylinder        //base area x height (base area = pi r r)
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;
    radiusorlength;
    name="Cylinder";
    multiplier = 1;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength*Math.PI;
    }
}
class Cuboid        //base area x height
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;
    radiusorlength;
    name="Cuboid";
    multiplier = 1;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength;
    }
}
class SolidObjectClassCreator
{
    CreateObject(type,height,radiusorlength)
    {
        let shapetype;
        if (type === "SBP")
            shapetype = new SquareBasedPyramid(height,radiusorlength);
        else if (type === "Cone")
            shapetype = new Cone(height,radiusorlength);
        else if (type === "Cylinder")
            shapetype = new Cylinder(height,radiusorlength);
        else if (type === "Cuboid")
            shapetype = new Cuboid(height,radiusorlength);

        shapetype.display = function()
        {
            return "You chose "+this.name+" with a volume of "+this.multiplier*this.baseareacalculator()*this.height;
        }
        return shapetype;
    }
}
/*function ShapeFactory()
{


    let ShapesArray=[];
    let FakeClass = new SolidObjectClassCreator();

    if(choice==1)
    {
        type="SquareBasedPyramid";
    }
    else if(choice==2){
        type="Cone";
    }
    else if(choice==3){
        type="Cylinder";
    }
    else if(choice==4){
        type="Cuboid";
    }


    ShapesArray.push(FakeClass.CreateObject(type,prompt(); //tutaj tworzysz ksztalty

    for (let i = 0; i < ShapesArray.length; i++)
    {
        document.write(ShapesArray[i].display());
        document.write("<br>");
    }
}
ShapeFactory();*/

let choice = prompt("Choose what you want?SquareBasedPyramid(1),Cone(2),Cylinder(3),Cuboid(4)");
let ShapesArray=[];
let FakeClass = new SolidObjectClassCreator();

if(choice==1)
{
    type="SBP";
}
else if(choice==2){
    type="Cone";
}
else if(choice==3){
    type="Cylinder";
}
else if(choice==4){
    type="Cuboid";
}

ShapesArray.push(FakeClass.CreateObject(type,prompt("How many?"),prompt("How many?")));

for (let i = 0; i < ShapesArray.length; i++)
{
    document.write(ShapesArray[i].display());
    document.write("<br>");
}