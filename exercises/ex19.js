/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/
let happy= ""
function emotions(emotion, laugh) {
    return "I am " + emotion + ", " + laugh(2);
}
     emotions("happy"), function laugh(number) {
        let message = ""
        for (let i = 1; i <= number; i++)
        {
        message += "ha"
    }
    return message += "!";
    


    };
    
    

console.log(emotions(happy), laugh(3))