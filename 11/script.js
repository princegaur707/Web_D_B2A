//Dom-Document object Model
//DOM is programming interface for web pages. It represents the page so that the
//programs can change the document structure as nodes and objects.That way the 
//programming langugage can interact with the page.
//1. by id
var ele1 = document.getElementById("one");
//document represent who document page
console.log(ele1);

var ele2 = document.getElementsByName('one');
//Multiple value will be targeted with name one
console.log(ele2);

var ele3 = document.getElementsByTagName('p');
console.log(ele3);

var ele4 = document.getElementsByClassName('one')
console.log(ele4);

var ele5 = document.querySelector('.one')
//only targets first instance
console.log(ele5);

var ele6 = document.querySelectorAll('.one')
console.log(ele6);
//sends array of object so we want only first one we can do like below

var ele7 = document.querySelectorAll('.one')[0]
console.log(ele7);

console.log("--------------------------------------");
//targeting Specific Nodes
//picking parent with the help of it's child
var ele8 = document.getElementById('two');
console.log(ele8.parentNode);
//parent node for picking parent 

//for picking sibling
var ele9 = document.getElementById('three')
console.log(ele9.nextElementSibling);//next-> for targeting next sibling

var ele10 = document.getElementById('three');
//text in console representing this node is text node it means containing text
console.log(ele10.nextSibling);

//for picking previous sibling
var ele11 = document.getElementById('three');
console.log(ele11.previousElementSibling);

//for picking child from parent node
var ele12 = document.querySelector('.one');
console.log(ele12.firstChild.nodeName);

var ele13 = document.querySelector('.one');
console.log(ele13.firstElementChild);

var ele14 = document.querySelector('.one');
console.log(ele14.lastElementChild);

var ele15 = document.querySelector('.one');
console.log(ele15.childNodes);


//Manipulating HTML With JS

// creating div element from js
var ele16 = document.createElement('div');
ele16.id = 'sample';
ele16.className = 'sample';//instead of class like in html here className is used
ele16.textContent='Hello World';
console.log(ele16);
//this is created in JS but still not showing in HTML page 
//so to show we have to do following

document.body.appendChild(ele16);//this will make it show

//Making Unordered List
var ul = document.createElement('ul');
var List_name=(task)=>{
    var li = document.createElement('li');
    li.textContent=task;
    return li
}
ul.appendChild(List_name('task1'));
ul.appendChild(List_name('task2'));
ul.appendChild(List_name('task3'));

document.body.appendChild(ul);

task2=['task4', 'task5', 'task6'];//appending using for loop
for(let i=0; i < task2.length;i++){
    ul.appendChild(List_name(task2[i]));
}

var ele17 = document.getElementById('one');
console.log(ele17.textContent);//considers styling 

var ele18 = document.getElementById('one')
console.log(ele18.innerText);//do not considers styling

var ele19 = document.getElementById('one');
ele19.textContent='Hello World';
console.log(ele19);

//short hand for creating elements with inner HTML
var ele20 = document.createElement('div');
ele20.innerHTML = '<p class = "three">Hello <b>Everyone</b> </p>'
document.body.appendChild(ele20);

var ele21 = document.querySelector('.three');
console.log(ele21.innerHTML);//will consider bold and etc,
console.log(ele21.innerText);//will show text only

//when we want to keep at position of our choice not bottom compulsorly
var ele22 = document.createElement('h3')
ele22.textContent = "Adding before class five";

//target nearby tag where we have to keep this
var ele23 = document.getElementById('five');
ele23.before(ele22);

var ele24 = document.createElement('h3')
ele24.textContent = "Adding after class five";
ele23.after(ele24);

//To add text in class after it's text written in HTML file

var ele25 = document.createElement('h4');
ele25.textContent='Inside five class and after the content written in html file';

ele23.appendChild(ele25);

//To add text in class before it's text written in HTML file

var ele26 = document.createElement('h4');
ele26.textContent ='Inside five class but before the content written in html file';

ele23.prepend(ele26);

//To replace text written by any way either script or HTML
var ele27 = document.createElement('h4')
ele27.textContent='text to replace with prepend text';

ele23.replaceChild(ele27,ele26);

//If we want to make the copy of the element

var ele28 = ele13.cloneNode(true);
console.log(ele28);//only brought paragraph not it's content need to add true in paramenter

//deletion of child
ele13.removeChild(ele13.firstElementChild);
console.log(ele13);

//To target the id and class inside of the class like radio button etc
ele23.setAttribute('class','check');//(attribute, attribute_name)
//To remove the Attribute
ele23.removeAttribute('class');

//Want to see what are the attributes applied on element
console.log(ele23.getAttribute('id'))//if present get attribute will return the value of it 
console.log(ele23.hasAttribute('id'))
//this will check if it have or not and return accordingly true or false

//Manipultaing style with JS
//-whatever styling properties we use in which dash is used like background-color
//they will be used in Camel case in JS
ele23.style.color='red';
ele23.style.backgroundColor='aqua';

ele24 = document.querySelector('.six')
ele24.className+=' addme';//will add another class
console.log(ele24.classList)
//methods related to class list
ele24.classList.add('addme2')
console.log(ele24.classList)
ele24.classList.remove('addme2')//to remove existing class
ele24.classList.replace('addme','addme3');//to replace class
ele24.classList.toggle('one');//if class present then remove it 
//if not present then adds it

console.log(ele24.classList.contains('two'));//checks whether class is present or not

//To check the parameters of particular node

var ele29 = ele27.getBoundingClientRect();
console.log(ele29);//will give styling details height,width and position

var style=getComputedStyle(ele27);//this will tell every styling
console.log(style);

//Event Handling -----------Important
//Event->any action in web browser like clicking on button, scroll

// mouseEvents = {mouseup, mousedown, click, doubleclick}
//mousedown => time till button clicked but not released)
//mouseup => button released
//mouseup + mousedown => click
//same steps repeated => double click

let btn = document.getElementById('btn');
// btn.addEventListener('click',display);
// function display(){
//     alert('Button is clicked');
// }

// btn.addEventListener('click',()=>{
//  alert('Button is cliked')
// });

btn.addEventListener('click',(event)=>{
    console.log(event);
    alert('Hello')
});

// preventDefault
let anch = document.getElementById('google')
anch.addEventListener('click',(event)=>{
    console.log(event);
    event.preventDefault();
})

//backtick

var a21=22;
console.log(`The value of a is ${a21}:`)//this method can print without appending
//string dynamically updated value displayed

//whenever any Eventlistener is applied it will work no  matter if there is any
//other Event Listener is applied on it.
//To stop this event.propogation is used

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',(event)=>{
    console.log('Hello');
    event.stopPropagation();//this will stock from printing of hello2
})

document.body.addEventListener('click',(event)=>{
    console.log("Hello2");
})

//Loading unloading-when page starts loading(content starts showing)
