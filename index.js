// Question 79
let Toyota_Corolla = {
    make: "Maham Jabbar",
    model: 2015,
    year: 2024
};
console.log(Toyota_Corolla.model);
// Question 80
// Update year and color property and add color in object.
Toyota_Corolla.color = "red";
Toyota_Corolla.year = 2021;
console.log(Toyota_Corolla);
// Question 81
// To pass object as a parameter we declare type like this obj:{[key:string]:any} and we use for in loop to console object 
// let value in obj     value store object property which console like this console.log(value)
// To access object property value we use console.log(obj[value]);
function LogObjectProperty(obj) {
    for (let value in obj) {
        console.log(`${value}  = ${obj[value]}`);
    }
}

// LogObjectProperty({name:string = "Maham",age:number = 45,})
LogObjectProperty({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
export {};
