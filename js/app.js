// 1. 연산기호 누르면 기존 숫자 저장
// 2. 숫자 클릭하면 디스플래이에 신규 입력됨

var num = document.getElementById("num");
var cap = 0;
var lastInput = 0;
var lastOpr = null;

function inputNum(x) {
    if (isNaN(lastInput)) {
        num.innerHTML = x;
    } else {
        num.innerHTML = Number(num.innerHTML + x);
    }
    lastInput = x;
}

function inputOpr(x) {
    if (!isNaN(lastInput) && lastOpr !== null){
        var cur = Number(num.innerHTML);
        switch(lastOpr) {
            case '+': cap = cap + cur; break;
            case '-': cap = cap - cur; break;
            case '*': cap = cap * cur; break;
            case '/': cap = cap / cur; break;
            case '=': cap = cur; break;
        }
        num.innerHTML = cap;
    }
    cap = Number(num.innerHTML);
    lastOpr = x;
    lastInput = x;
}

function inputClr() {
    num.innerHTML = 0;   
    cap = 0;
    lastInput = 0;
    lastOpr = null;

}
