function alertCity(element){
    alert(`Weather data for ${element.innerText} is not currently available.`)
}

function remEl(elID) {
    document.getElementById(elID).remove()    
}

var tempInit = "C";
function tempConvert(element){
    if(element.value === tempInit){
        return;
    } 
    var temps = document.querySelectorAll(".temp");
    if(element.value === "C"){
        tempInit = "C"
        for(el of temps){
            el.innerText = Math.round((el.innerText - 32)*5/9);
        }
    }
    if(element.value === "F"){
        tempInit = "F"
        for(el of temps){
            el.innerText = Math.round(el.innerText/5*9+32);
        }
    }
}