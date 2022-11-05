const operation = document.querySelector('.operation');
// console.log(operation.innerHTML);
const buttons = document.querySelectorAll('button');
let str = "";

Array.from(buttons).forEach((button)=>{
    
    button.addEventListener('click',(e)=>{
        if(button.innerHTML=='C'){
            var length = str.length;
            operation.innerHTML = str.substring(0,length-1);
            str = str.substring(0,length-1);
        }
        
        else if(button.innerHTML=='AC'){
            operation.innerHTML = "";
            str = "";
        }
        else if(button.innerHTML=='='){
            str = eval(str);
            operation.innerHTML = '='+ str;
        }
        else{
            str = str + button.innerHTML;
            operation.innerHTML = str;
            
        }
        
    });
    
});

