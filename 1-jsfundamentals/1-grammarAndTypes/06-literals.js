/*
LITERALS

1-grammarAndTypes
    06-literals.js
*/

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "beef and barley"
}
console.log(soup.c);

// array and object literals can hold primitive and complex types (arrays, objects, functions)
// arrays and objects are dynamic types - they are complex compared to primative data types

let complexArrLiteral = [1, true, "Acadmey", [1,2,3], {key: "test"}, function(){return "yes"}];
// anonymous function is one without a name

console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {
    num: 1,
    boolean: true,
    string: "Academy",
    array: [1,2,3],
    obj: {key: "test", func: function(){return "yes"}}
} 

console.log(complexObjLiteral.obj.func);
