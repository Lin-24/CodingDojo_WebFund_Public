function like(element) {
    var counter = document.getElementById(element);
    var count = parseInt(counter.innerText);
    count++;
    counter.innerText = count;
}