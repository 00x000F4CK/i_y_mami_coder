 "use strict"


 const age = 16;

 let name ="Джон";
 let admin = name;
 
let boo = true;




// СЕЛЕКТОРЫ
const header = document.querySelector("#header");

const headerContacts = document.querySelectorAll(".nav_links");

const testBtn = document.querySelector("#testBtn");


//КОНСОЛЬ ЛОГ



 console.log(headerContacts);



//функция
 function sayHello() {
     let message = "Hello " + name;
     console.log(message);
 }
 //ВЫЗЫВАЕМ ФУНКЦИЮ // ТОЖЕ ПОВТОРИТЬ!!!

sayHello();

function simpleMath(a, b) {
    let result = a + b ;
    return result;
}

let sum = simpleMath(111, 222);

console.log(sum);






//СКРОЛЛ,НАДО ПОВТОРИТЬ!!!!!!


window.addEventListener("scroll", function() {

let scrollPos = window.scrollY;

if(scrollPos > 0){
    header.classList.add('red');
} else {
header.classList.remove('red');
}

console.log(scrollPos);
});


// ВЕШАЕМ СОБЫТИЯ!!!!!

testBtn.addEventListener("click", function() {
  console.log('clicked');

});



for(let navItem of headerContacts){
   navItem.addEventListener("click", function() {
 console.log(navItem.text);
}); 
}





