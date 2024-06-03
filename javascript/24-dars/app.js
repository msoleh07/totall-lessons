// Class & Constructor
// #class
class Person {
    constructor(fname, lname, age, hobby) {
        this.fname = fname,
            this.lname = lname,
            this.age = age,
            this.hobby = hobby
    }
}
let result = new Person("Sardor", "Raimjonov", 45, "football")
let result2 = new Person("Behruz", "Zafarov", 18, [
    {
        hobbyName: "football",
        train: {
            from: "8:00",
            to: "10:00"
        }
    },
    {
        hobbyName: "tennis",
        train: {
            from: "10:30",
            to: "12:30"
        }
    }

])

console.log(result);
console.log(result2.hobby[1].train.to);

// ==================================================================
// #Constructor

function Person2(fname, lname, age, hobby) {
    this.fname = fname,
        this.lname = lname,
        this.age = age,
        this.hobby = hobby
}
let res = new Person("Sardor", "Raimjonov", 45, "football")
console.log(res);