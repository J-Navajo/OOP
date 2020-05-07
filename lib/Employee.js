
class Employee{
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
         
    }

     getName() {
         return this.name
     }
     getId() {
         return this.id
     }
     getEmail() {
         return this.email
     }
     getRole() {
         return "Employee"
     }
}

module.exports = Employee




/*

cat={
    name:"floffy",
    age: 4
}
dog={
    name: "goofy",
    age: 3


}

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age

    }
}

function Animal(name, age){
    this.name = name
    this.age = age
}

var cat= new Animal("floffy", 4)
var dog =new Animal("goofy",3)

*/