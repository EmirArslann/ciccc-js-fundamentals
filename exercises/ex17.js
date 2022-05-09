/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laugh(number) {
    let message = ""
    for (let i = 1; i <= number; i++)
    {
    message += "ha "
}
return message

};
console.log(laugh(20))