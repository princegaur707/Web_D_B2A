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
        toDoItem.innerHTML +='<span class="editItem">&#x1F589</span>'//adding cross sign
        // console.log(toDoItem.innerText);
        listEI.insertAdjacentElement('beforeend',toDoItem);
    }
    DeleteFunction();//whenever new element in list is added firstly every element from HTML array(not original array)
    //is deleted so we need to add again DeleteFunction to every element
}

submitinputE1.addEventListener('keyup', (e)=>{
    // console.log(e.keyCode)  to know what is the key code of any key
    if(e.keyCode === 13){
        const val = e.target.value;//the text we typed will be stored in val
        e.target.value = "";//once Enter key is pressed we want our submit area to be clear
        arr.push(val);
        refreshList();
    }  
})
refreshList()
const editTodo = function(item, toEdit){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === toDoItem){
            console.log(toDoItem)
        }
    }
}

function DeleteFunction(){
    const deleteItemEls = Array.from(document.getElementsByClassName('deleteItem'));//Array.from lets
    //to make the array from iterable objects to get every element with the help of for loop
    // console.log("changed");
    // console.log(deleteItemEls);
    const editItemEls = Array.from(document.getElementsByClassName('editItem'));
    // console.log(editItemEls);
    for(let i=0; i <deleteItemEls.length; i++){
        deleteItemEls[i].addEventListener('click',(e)=>{
            const item = e.target.parentNode.innerText;
            const toDoItem = item.slice(0, -1).trim(); //I am getting cross sign so used slice to remove that
            // and trim is used to remove the space coming along with text 
            arr.pop(arr.indexOf(toDoItem));
            refreshList();
        })
        editItemEls.addEventListener('click', (e) =>{
            const item = e.target.parentNode.innerText;
            const toDoItem = item.slice(0, -3).trim();//cross sign, edit sign were coming with it
            const val = submitinputE1.value;
            if(val === "")
            {
                alert("Enter the value in the input Box")
                return;
            }
            // editItemEls(toDoItem, val)
            console.log(toDoItem,val);
        } )
    }
}
 