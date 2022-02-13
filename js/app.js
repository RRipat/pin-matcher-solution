function getPin (){
    const pin = Math.round(Math.random()*10000) 
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('please get pin 3 degit',pin)
        return getPin()
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin



}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
        
    }
    else{
        const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }

})


function varifyPin(){
    const displayPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('success-message');
    const arrorMessage = document.getElementById('arror-message');
    if(displayPin == typedNumbers){
        
        successMessage.style.display = 'block'
        arrorMessage.style.display = 'none'
    }
    else{
        
        arrorMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
}