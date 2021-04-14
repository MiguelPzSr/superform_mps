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

    let name = document.getElementById("name");
    if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
        alert("El campo de nombre no está correctamente rellenado")
        return formularioCorrecto = false;
    }

    let surname = document.getElementById("surname");
    if( surname == null || surname.length == 0 || /^\s+$/.test(surname) ) {
        alert("El campo de apellido no está correctamente rellenado")
        return formularioCorrecto = false;
    }
    

    let age = document.getElementById("age");
    if (age.length == 0){
        alert('Porfavor, indique su edad.');
        return;
    }else if(age < 18){
        alert("No se puede regirtrar a personas menores de 18 años.");
        return 0;
    }

    let dniNumber = document.getElementById("dniNumber");
    
    let email = document.getElementById("email");
    
    let description = document.getElementById("description");
    
    
    return formularioCorrecto;
}