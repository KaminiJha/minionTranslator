var textareaInput=document.querySelector("#textareaInput");

var translateBtn=document.querySelector("#translateBtn");
var textareaOutput=document.querySelector("#textareaOutput");

translateBtn.addEventListener("click",translateHandler);
function handleError(err)
{
    console.log(err);
}

function translateHandler()
{
    var input=textareaInput.value;
    var url="https://api.funtranslations.com/translate/minion.json"+"?text="+input;
    fetch(url)
    .then(res=>res.json())
    .then(inp=>{
        console.log(inp)
        var outputText=inp.contents.translated;
        textareaOutput.innerText=outputText;
    })
    .catch(handleError)
}