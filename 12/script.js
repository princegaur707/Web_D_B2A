// input 
// try{
//     eval(input)
// }
// catch{
//     Error
// }

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'))
//Array.from-> to make the array(Ref Lect 9 line 381)
//getElementsByClassName-> return array of objects
//we need Array.from because className do not return pure array. That array
//is of some form Like HTMLCollections
            //element
buttons.map(button =>{
    button.addEventListener('click',(event)=>{
        // console.log(event.target); //give that node which clicked
        switch(event.target.innerText){//InnerText will give text of that node
        //clear,backspace and equal button can't be handled by eval so handle
        //them separately    
            case 'C':
                display.innerText='';
                break;
            case '←'://some special characters which come in html syntax are used after encoding
                if(display.innerText){
                    display.innerText= display.innerText.slice(0,-1);
                    //will run from start to end as slice do not include last element that will be excluded 
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                }
                catch{
                    display.innerText = 'Error';//if screen is empty we need to handle the situation
                }
                break;
            default:
                display.innerText += event.target.innerText;//appened not replace
        }
    })
})