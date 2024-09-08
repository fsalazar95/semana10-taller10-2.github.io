const buttonText = document.getElementById("buttonText")

buttonText.addEventListener('click', function() {

    const inputValue = document.getElementById('inputText').value;
    
    localStorage.setItem('datoGuardado', inputValue);
    
    document.getElementById('inputText').value = '';
});