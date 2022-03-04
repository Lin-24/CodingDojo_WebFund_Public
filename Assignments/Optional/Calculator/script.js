var dispNum = document.getElementById("display");
var numarr = [];
var numarr2 = [];
var num1 = 0;
var num2 = 0;
var op = undefined;

function press(val) {
    if(numarr.length > 0 && op != undefined){
        numarr2.push(val)
        num2 = parseInt(numarr2.join(''));
        dispNum.innerText = num2;
    }
    else{
        numarr.push(val);
        num1 = parseInt(numarr.join(''));
        dispNum.innerText = num1;
    }
}

function setOP(oper){
    op = oper;
}

function calculate() {
    if (op && num2) {
                
        if (op === "+") {
            var result = num1 + num2;
        }
        else if (op === "-") {
            var result = num1 - num2;
        }
        else if (op === "*") {
            var result = num1 * num2;
        }
        else if (op === "/") {
            var result = num1 / num2;
        }
        dispNum.innerText = result
        
        numarr = [];
        numarr2 = [];
        num2 = undefined;
    }

}

function clr() {
    dispNum.innerText = 0;
    numarr = [];
    numarr2 = [];
    op = undefined
}

