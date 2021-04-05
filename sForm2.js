let form = document.getElementById("sForm");
let form = document.getElementById("sForm");
let form = document.getElementById("sForm");
let form = document.getElementById("sForm");
let form = document.getElementById("sForm");
let form = document.getElementById("sForm");
let form = document.getElementById("sForm");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    if (validaForm()==true) {
        
        runAjax();
    }
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

    formData.append("creatorForm", "Miguel")

    xhr.send(formData);
}

function validaForm() {
    let formularioCorrecto = true;



    return formularioCorrecto;
}