//varaible
export var x:string = "welcome";

//simplefunction
export function myfun():void{
    console.log("This is my function");
}

//class
export class myclass
{
    a:number;
    b:number;
    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;
    }
    add=()=>
    {
        return(this.a+this.b);
    }
}