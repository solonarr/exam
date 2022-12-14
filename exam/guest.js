function verify() {
    let adults = parseInt(document.getElementsByTagName("input")[1].value);
    let kids = parseInt(document.getElementsByTagName("input")[2].value);
    let anim = parseInt(document.getElementsByTagName("input")[3].value);
    console.log(adults, kids, anim)

    

    if (adults >= 0 && kids >= 0 && anim >= 0 ) {
        result = ' Количество существ: ' +  String(adults * 1 + kids * 1 + anim * 1)
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else {
        result = ' Введите неотрицательные числа'
        document.getElementById("result").innerText = messageText + result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
let result;
let check = false;

const elementA = document.getElementById("adults");
elementA.addEventListener('keyup', verify);
const elementB = document.getElementById("kids");
elementB.addEventListener('keyup', verify);
const elementC = document.getElementById("anim");
elementC.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


