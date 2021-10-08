/// console.log("Hello");         // prints hello.
// alert("Hello i am Neil");     // gives an alert.



// selecting element with Id and changing its HTML.
// document.getElementById('head').innerHTML="Hello World";



//Asking user and giving them alert message.
// var age=prompt("Please enter your age");
// if(age<18)
// {
//     document.getElementById('head').innerHTML="you are "+age+" years old"
// }
// else
// {
//     alert("you can drink");
// }




// Functions
// Function that takes name and welcomes you.
// var name= prompt("Enter your name");
// function myfunc(name){
//     document.getElementById('head').innerHTML="Hello "+name+" Welcome!";    
// }
// myfunc(name);



// While Loops
// var num=0;
// while (num<100) {
//     num++;
//     console.log(num);
// } // by default it changes the line after the print statement ...


//for loop
// for (let num = 0;num < 99; num++) {
//    console.log(num+1);
// }



//data types
// let name="Neil"; // string
// let num=10;  // int
// let obj={first:"Neil",second:"Maheshwari"}; // object
// let truth=false; // boolean
// let array= ['array',10,'Neil',null];// array
// let random; // undefined..



// strings..
// let fruit='banana';
//let morefruit="banana\napple";  // new line
// console.log(morefruit);
// console.log(fruit.length); // gives length
// console.log(fruit.indexOf('nan')) // gives 2
// console.log(fruit.slice(2,4)); // [) selects like this..
// console.log(morefruit.replace('app','ban'));
// console.log(morefruit.replace('app','ban'));
// console.log(morefruit.toUpperCase());
//console.log(morefruit.charAt(2));
//console.log(fruit.split('')); // splits by whatever there in string.



// Arrays in Javascript..
// let fruits=['banana','apple','Mango'];
// fruits= new Array('banana','mango','apple');
// // array methods..
// // console.log('to string',fruits.toString());
// // console.log(fruits.join(' & ')); // joins in between..
// // console.log(fruits.pop()); // pops last element..
// console.log(fruits.push('berry'),fruits); // push last element..
// console.log(fruits.shift(),fruits); // removes first element..
// console.log(fruits.unshift("kiwi"));
// console.log(fruits);
// let veges=['bhindi','karela'];
// let concatarr= fruits.concat(veges);
// console.log(concatarr);
// console.log(concatarr.slice(1,4)); // prints element 1 to 3
// console.log(concatarr.reverse()); // reverse the array..

// sorting in ascending order..
// let nums=[23,5453,65,34,23,77,13];
// console.log(nums.sort(function(a,b){return a-b}));


// // sorting in decending order..
// let nums=[23,5453,65,34,23,77,13];
// console.log(nums.sort(function(a,b){return b-a}));

// let emptyarr= new Array();
// for (let index = 0; index < 10; index++) {
//     emptyarr.push(index);
    
// }
// console.log(emptyarr);





// Objects in javascript.

// let student={
//     name:"Neil",
//     rollno:23,
//     age:21,
//     studentinfo: function(){
//         return this.name +' '+ this.age;
//     }
// }

// student.name="Rohan"; // change the name
// student.age++; // increment age..
// console.log(student.studentinfo());




// Json (Javascript object notation)
let students=`[
    {
        "name":"Neil",
        "age":20
    },

    {
        "name":"Rohan",
        "age":22
    }

]`
console.log(JSON.parse(students));
console.log(JSON.parse(students)[0]);
console.log(JSON.parse(students)[0].age);