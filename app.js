var buttonReference = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var translateAPI = "https://api.funtranslations.com/translate/minion.json"

function serverUrlConstructor(text){
    return translateAPI+ "?"+"text=" + text
}

function errorHandler(){
    alert("There is some error on the server end please try after sometime")
}

function onClickEventHandler(){
    var inputText  = textInput.value
   fetch(serverUrlConstructor(inputText))
   .then(resopnse => resopnse.json())
   .then(json => {
        outputDiv.innerText = json.contents.translated
    })
    .catch(errorHandler)
}

buttonReference.addEventListener("click",onClickEventHandler)
