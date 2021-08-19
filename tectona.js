


// 1)  Please describe in a few sentences the MVC architecture.
  
// MVC is a design pattern used for simplifying software development and divides the project into 3 
// different parts : Model , View , Controller 
// Model - responsible for the logic of the project and manage the data from the Database
// view - responsible for the user interface (ejs , html , react)
// controller - responsible for comunicate between the Model and View ,
//  for each route we build a diffrent controller 




// 2) Write a program that prints the numbers from 1 to 100. But for multiples of
//    three print “Tec” instead of the number and for the multiples of five print “tona”.
//    For numbers which are multiples of both three and five print “Tectona”.




let ans = [];
    
for(let i = 1 ; i <= 100 ; i++){
      let str = ""
      if( i % 3 === 0) str += "Tec"
      if( i % 5 === 0) str += "Tona"
      ans.push(str == "" ?  i : str)
}
console.log(ans);



//  3) Explain the difference (in Javascript) between "==" & "===" logical operators:

//     the diffrece between == and === is : == compere between the values. for exemple
//     if we compere "5" and 5 js returns true because its only in the value compararison.
//     === compere between the value and the type. for exemple "5" === 5 returns false because 
//     the values are equal, but the type is not ("5" is string and 5 is a number)



//  4) Extend the "Array" class in Javascript with a new method that calculates and returns the
//     sum of the Array's items (you can assume all of the items are numbers).



Array.prototype.SumElements = function(){
let sum = 0;
sum = this.reduce((x,y) => (x+y))
return sum;
}

let arr = [1,2,3,4,5];
console.log("Sum of array is " + arr.SumElements());