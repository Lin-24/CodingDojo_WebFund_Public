function like(element) {
    var counter = document.getElementById(element);
    var count = counter.innerText;
    count++;
    counter.innerText = count;
}