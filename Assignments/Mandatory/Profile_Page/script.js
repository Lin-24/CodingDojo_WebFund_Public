function remElement(elID) {
    var element = document.getElementById(elID)
    element.remove()
}

function changeName(elID) {
    var element = document.getElementById(elID)
    element.innerText = "Ben-Jammin"
}