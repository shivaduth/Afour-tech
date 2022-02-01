//Defining a Student class.  
var Student = /** @class */ (function () {
    //defining constructor   
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    //creating method or function   
    Student.prototype.display = function () {
        console.log("Function displays Student ID is: " + this.id);
        console.log("Function displays Student ID is: " + this.name);
    };
    return Student;
}());
//Creating an object or instance     
var obj = new Student(101, "Virat Kohli");
//access the field   
console.log("Reading attribute value of Student as: " + obj.id);
console.log("Reading attribute value of Student as: " + obj.name);
//access the method or function  
obj.display();
