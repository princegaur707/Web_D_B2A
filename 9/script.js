// variable : data holding container 
// data types : 

// 1. number 

var a= 20;
var b= 40;

console.log(a);

var a = 34.45;
console.log(a);

var a = "hello";
console.log(a);

var a = true;  // boolen value
//small case with no quotes
console.log(a);

// let and const 

let m = 20;
// let m ='hello';cannot be redeclared
m = 'hello';//can be reassigned only
console.log(m);

const n =20;
// const n= 30;
// n=30; const can neither be redeclared nor reassigned is possible 
console.log(n);

// operators ...

// 1. arithematic operations 

var a= 10;
var b=10;
var z= 7;
console.log(a+b);

var c= "hello";
var d = "hii";
console.log(c+d);
console.log(a+c);//directly concatenate such thing can only be done by java other than JS.
console.log(c+a);
console.log(c+a+b);
console.log(a+b+c);//moves from left to right so, firstly addition is performed and once
//it gets string in pipeline then numbers will be considered as string.

console.log(a-b);
console.log(c-b);// NaN (Not a Number)

console.log(a*b);
console.log(c*b);

var y = (a/z);
console.log(y);
var y = parseInt(a/z);//If we want integer answer
console.log(y);

console.log(a**b);
a+=1;
console.log(a++);
console.log(a);
b-=1;
b--;
console.log(b)

console.log(a%b);

// Assignment operators 
// 1. = 
// 2. +=
// 3. -=
// 4. *=
// 5. /=
// 6. %=
// 7. **=

a%=b;
a= a%b;
console.log(a)


// logical operators 
// 1. and ( && )

a= false
b= false
console.log(a && b);

// 2. or operator (||)

a= false
b= true
console.log(a || b);

// 3. not (!)

console.log(!a);

// conditional operators 

// 1. check( ==)
//matches values only not type

var a=97;
var b='97';
console.log(a==b);

console.log(a===b);//matches both value and type

// 2. !=
// 3. !==

// > greater than 
// < less than 

// >= , <=

// ?

console.log(a===b?'hello':'hii')

// object 

var  data1 = {name: "Tam" , age: 20}//map and it's type is object
console.log(data1);
//JS array: ordered collection of elements do not matter homo or hetrogeneous
var  data2 = ['apple','bananna', 'kiwi'];
console.log(data2)

var data3 = new Date();
console.log(data3);

console.log(typeof(a));
console.log(typeof(data1));
console.log(typeof(data2));
console.log(typeof(data3));

// Strings 

var a = 'I Am A Softeware Engineer';
console.log(a.length);

console.log(a.toUpperCase());

a=a.toLowerCase()
console.log(a);

a=a.replace('engineer','doctor')
console.log(a);
a=a.replace('doctor','engineer')
console.log(a);

var b ="hello world"

var c= a.concat(" "+b);
console.log(c);

var d =     "     heloo      ";
console.log(d);

console.log(d+"hii")
console.log(d.trimEnd()+"hii")
console.log(d.trim())

var a = 'I Am A Software Engineer';

var d = a.length;

console.log(d);

var e =a.slice(-6, -2);//last(-2) entry is not included
console.log(e);
console.log(a.substring(-6,5));
//substring do not entertain negative values, they are considered as 0.
console.log(a.substr(0,10));
//substr(start_index, length) while in substring(start_index,end_index)

console.log(a.slice(0,0));
console.log(a.slice(-10));//will print last 10 entries

// console.log(a.reverse());

var a =['a','b','c']
console.log(a.reverse());

console.log("-------Array Staring--------")
// Arrays 
var a =['a','b','c','d','e','f']
console.log(a.length)

a.push('g')
console.log(a)

a.pop()
console.log(a)

a.shift()//removes first element
console.log(a);

a.unshift('t')//add element at the first position
console.log(a);

a[2]='m';
console.log(a);

console.log(a.slice(1,3));

console.log(a);

console.log(a.toString());

console.log('-------Function------------');

// Function ... 

function myFunction(a,b){
    return a*b;
  }
  
  console.log(myFunction(10,20));
  
  
  var myFunction = function(a,b){
    return a+b;
  }
  
  console.log(myFunction(30,40))

  console.log("--------Arrow Function----------")
  // Arrow Functions 
  
  var hello = (a,b) => { return a+b; }
  
  console.log(hello(10,20));

  console.log("--------If Else----------")
  // if else 
  
  var a ="hello2";
  
  if(a=='hello'){
    console.log('yes')
  }
  
  else if(a=='hello1'){
    console.log('yes123')
  
  }
  
  else{
    console.log('no')
  
  }

  console.log("--------date----------")  
  // date 
  
  var date = new Date()
  console.log(date);
  
  console.log(date.getFullYear())
  console.log(date.getMonth())  
  console.log(date.getDay())
  console.log(date.getHours())
  console.log(date.getMinutes())
  console.log(date.getSeconds())
  
  console.log(date.setFullYear(2018));
  console.log(date.setHours(14));
  console.log(date);
  
  console.log("-------Switch Case----------")
  var a = "+";
  var a1=10;
  var a2=20;
  var result=0;
  
  switch(a){
    case "+" : result =a1+a2;break;
    case "-" : result =a1-a2;break;
    case "*" : result =a1*a2;break;
    case "/" : result =a1/a2;break;
    default:result=0;
  }
  
  console.log(result);
  
  console.log("--------Loops----------")
  // Loops 
  
  arr1=['a','b','c','d'];
  
  for(var i=0; i<arr1.length; i++){
    console.log(arr1[i]);
  }
  
  console.log("--------in and of keyword----------")
  // in keyword 
  
  
  for(var i in arr1){
    console.log(arr1[i]);
  }
  
  
  for(var i of arr1){
    console.log(i);
  }
  
  var i =0;
  
  while(i<10){
    console.log(i);
    i++;
  }
  
  // "use strict";
  
  var t=['1','2','3'];
  g=5;
  console.log(g);
  
  // ---------------------
  
  // Hoisting 
  
  
   x="Tejender";
   var x;
  
  //  ------------------
  
  var arrr=['a','b','c','d'];
  
  arrr.map(function(element,index){
    console.log(index,element);
  })//maps calls a function once for each element in array
  
  arrr.map(myFunction1)
  function myFunction1(item,index){
    console.log(index,item);
  }
  
  arrr.map((element,i)=>
   console.log(element,i)
  )
  
  var arr9=arrr.filter((item)=> item != 'a');
  console.log(arr9);
  console.log(arrr);
  
  
  arr10=[1,2,3,4,5]
  
  ar11= arr10.map(item=> item*item)//for single parameter even parentheses 
  //can be removed
  console.log(ar11);
  
  arr10.forEach((item)=>console.log(item*item));
  
  
  class FindArea {
    constructor(l,b){
      this.l=l
      this.b=b
    }
    area(){
      return this.l*this.b
    }
  }
  
  var t = new FindArea(20,30);
  console.log(t.area());
  
  
  var arr123=[1, 2, 3]
  var a= Array.from(arr123, item => item + item);
  console.log(a);
  
  var abc= {name:"tejender", role:"mentor"}
  
  abc.name
  abc.role
  // Dom 

// 1. by id 

var ele1 = document.getElementById('one');
console.log(ele1);

var ele2= document.getElementsByName('one');
console.log(ele2);

var ele3= document.getElementsByTagName('p');
console.log(ele3);

var ele4 = document.getElementsByClassName('one')
console.log(ele4)

var ele5= document.querySelector('.one');
console.log(ele5)

var ele6 = document.querySelectorAll('.one')
console.log(ele6);

// Specific Nodes

var ele7 = document.getElementById('two');
console.log(ele7.parentNode);

var ele8 = document.getElementById('three');
console.log(ele8.nextElementSibling)

var ele9 = document.getElementById('three');
console.log(ele9.previousElementSibling);

var ele10= document.querySelector('.one');
console.log(ele10.firstChild.nodeName);

var ele11= document.querySelector('.one');
console.log(ele11.firstElementChild);

var ele12= document.querySelector('.one');
console.log(ele12.lastElementChild);

var ele13= document.querySelector('.one');
console.log(ele13.childNodes);

// Manipulating Html 


var ele14 = document.createElement('div');
ele14.id='sample';
ele14.className='sample';
ele14.textContent='hello World';
console.log(ele14);

document.body.appendChild(ele14)

var ul = document.createElement('ul');

var createlist=(task)=>{
  var li= document.createElement('li');
  li.textContent=task
  return li
}

ul.appendChild(createlist('task1'));
ul.appendChild(createlist('task2'));
ul.appendChild(createlist('task3'));

document.body.appendChild(ul)

var ele15 = document.getElementById('one')
console.log(ele15.textContent);

var ele16 = document.getElementById('one')
console.log(ele16.innerText);

var ele17 = document.getElementById('one')
ele17.textContent='Hello World';
console.log(ele17);

var ele18 = document.createElement('div');
ele18.innerHTML='<p class="three">Hello <b> Everyone </b> </p>';

document.body.appendChild(ele18)

var p = document.querySelector('.three');
console.log(p.innerHTML)
console.log(p.innerText)

var ele19 = document.createElement('h2');
ele19.textContent="its feeling awesome";

var ele20 = document.getElementById('five');
ele20.before(ele19);

var ele21 = document.createElement('h2');
ele21.textContent="its feeling great";

ele20.after(ele21);

var ele22=document.createElement('h4');
ele22.textContent='js is fun !!!';

ele20.appendChild(ele22);

var ele23=document.createElement('h4');
ele23.textContent='js is fun  123!!!';

ele20.prepend(ele23);

var ele24=document.createElement('h4');
ele24.textContent='js is fun  12345678!!!';

ele20.replaceChild(ele24,ele23)

var ele25 = ele13.cloneNode(true)
console.log(ele25)

ele13.removeChild(ele13.firstElementChild);
console.log(ele13);


ele20.setAttribute('class','five');
ele20.removeAttribute('class');

console.log(ele20.getAttribute('id'))
console.log(ele20.hasAttribute('class'))

ele20.style.color='red';
ele20.style.backgroundColor='aqua';

ele13.className+=' addme';

console.log(ele13.classList)

ele13.classList.add('addme2');
ele13.classList.remove('addme');
ele13.classList.replace('addme2','addme3');
ele13.classList.toggle('one');
ele13.classList.toggle('two');

console.log(ele13.classList.contains('addme3'))

var ele26= ele24.getBoundingClientRect();
console.log(ele26);

var style=getComputedStyle(ele24)
console.log(style);

// Event Handling 

// Event - event is an action that occurs in web browser 

// mouseEvents = {mousedown, mouseup, click,  dblclick}

let btn = document.getElementById('btn');

// btn.addEventListener('click',display);

// function display(){
//   alert('Button is clicked');
// }

// btn.addEventListener('click',()=>{
//   alert('Hello')
// })


// btn.addEventListener('click',(event)=>{
//   console.log(event.target);
//   alert('Hello')
// })


// preventDefault()

// let anch = document.getElementById('google')

// anch.addEventListener('click',(event)=>{
//   console.log(event);
//   event.preventDefault();    
// })

// backtick 

var a21= 22;

console.log(`The value of a is ${a21}:` )



// stopPropagation()

// btn.addEventListener('click',(event)=>{
//   console.log('Hello'); 
//   event.stopPropagation();
// })

// document.body.addEventListener('click',(event)=>{
//   console.log("Hello 2");
// })


// loading unloading 

// addEventListener('load',()=>{
//   console.log('This page is fully loaded now !!')
// })

// addEventListener('unload',()=>{
//   console.log('This page is fully loaded now !!')
// })


btn.addEventListener('mousedown',()=>{
  console.log('I am down')
})

btn.addEventListener('mouseup',()=>{
  console.log('I am up')
})
btn.addEventListener('click',()=>{
  console.log('I am Clicked')
})

// {keydown->keyup->keypress}
document.body.addEventListener('keydown', (event)=>{
  console.log('Key Pressed')
  console.log(event)
})

// window.addEventListener('scroll',()=>{
//   console.log('I am scrolling ')
// })


// CallBack Functions 


var array1=[1,2,3,4,5,6,7,8,9,10]

function checker(array1,callBack){
  var array2=[]
  for(var i of array1){
    if(callBack(i)){
      array2.push(i)
    }
  }
  return array2
}


var result = checker(array1,(number)=>{
  return number%2==0
})

console.log(result);

// SetTimeOut and SetInterval 

// setTimeout(()=>{
//   console.log('Print ME after some delay')
// },2500)


// let runningClock=setInterval(runclock,1000)

// var timeclock= document.getElementById('time')
// function runclock(){
//   const d= new Date();
//   timeclock.innerHTML=d.toLocaleTimeString();
// }

// var stopTime= document.getElementById('tostop');

// stopTime.addEventListener('click',()=>{
//   clearInterval(runningClock)
// })

var d= new Date();
console.log(d.toLocaleTimeString())

// eval 

console.log(eval('2+2'));
console.log(eval('2+2*(4+4)'));
