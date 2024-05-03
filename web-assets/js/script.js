let input = document.querySelector('input')
let button = document.querySelector('.button')
let result = document.querySelector('.multiply_result')

button.addEventListener('click', ()=>{
    if(input.value==''){
        alert('Please input any number')
    }
    if(input.value=='0'){
        alert(`'0' is not acceptable. Please type another number`)
    }
    else{
        for(let m=1;m<11;m++){
            result.innerHTML+=input.value+' x '+m+' = '+input.value*m+"<br>"
        }
    }
})