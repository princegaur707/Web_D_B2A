const arr = [ ];
const listEI = document.getElementsByClassName('list')[0];
console.log(listEI);
const submitinputE1= document.getElementById('submitinput')
// console.log(listEI);
const refreshList = function(){
    listEI.innerHTML=""; //for clearing all the element of earlier so that there is no
    //repition otherwise List will be like 1 , 1, 2 for 1, 2 input
    for(let i=0; i<arr.length; i++){
        const toDoItem = document.createElement('li');
        toDoItem.setAttribute('class',"list-item")
        toDoItem.innerText=arr[i];
        toDoItem.innerHTML +='<span class="deleteItem">&#10060;</span>'//adding cross sign
        listEI.insertAdjacentElement('beforeend',toDoItem);
    }
}

submitinputE1.addEventListener('keyup', (e)=>{
    // console.log(e.keyCode)  to know what is the key code of any key
    if(e.keyCode == 13){
        const val = e.target.value;//the text we typed will be stored in val
        e.target.value = "";//once Enter key is pressed we want our submit area to be clear
       arr.push(val);
       refreshList();
    }  
})
const del = Array.from(document.getElementsByClassName('deleteItem'));//as we have to apply 
//on all so converted to array
for(let i=0; i <del.length; i++){
    del[i].addEventListener('click',(e)=>{
        const item = e.target.parentNode;
        const parent = item.parentNode;
        parent.indexOf();
    })
}
