var Character = /** @class */ (function () {
    function Character(hunger, health) {
        this.health = health;
        this.hunger = hunger;
    }
    Character.prototype.setHunger = function (hunger) {
        this.hunger = hunger;
    };
    Character.prototype.setHealth = function (health) {
        this.health = health;
    };
    Character.prototype.getHunger = function () {
        return this.hunger;
    };
    return Character;
}());
var jeff = new Character(50, 100);
console.log(jeff.getHunger());
// jeff.setHealth(100);
// jeff.setHunger(100);
// class Hero{
//     private heroId:number;
//     setHeroId(heroId:number):void{
//         this.heroId=heroId;
//     }
// }
