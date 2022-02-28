function remElement(element) {
    element.remove();
}

function logOnOff(element){
    if(element.innerText === "Login"){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login"
    }
}

function liked(element){
    alert(`${element.name} was liked!`)
}