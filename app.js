var buttonReference = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

function onClickEventHandler(){
    outputDiv.innerText = "dkfjaslkdf " + textInput.value
}

buttonReference.addEventListener("click",onClickEventHandler)
