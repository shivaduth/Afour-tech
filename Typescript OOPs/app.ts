class Character{
    private hunger: number;
    private health: number;
    constructor(hunger: number, health: number){
        this.health=health;
        this.hunger=hunger;
    }
    setHunger(hunger: number):void{
        this.hunger=hunger;
    }

    setHealth(health: number):void{
        this.health=health;
    }

    getHunger(){
        return this.hunger;
    }
}
const jeff=new Character(50, 100);
console.log(jeff.getHunger());
// jeff.setHealth(100);
// jeff.setHunger(100);
// class Hero{
//     private heroId:number;

//     setHeroId(heroId:number):void{
//         this.heroId=heroId;
//     }
// }

