let form = document.getElementById("sForm");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    runAjax();
});

function runAjax(){

    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr= new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("POST", "controller.php");
    
    let formData = new FormData(form);

    xhr.send(formData);
}