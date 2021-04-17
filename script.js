// Süleymalı Fuad
function reqemSec(nomre) {
    reqem = document.getElementById("netice").innerHTML;
    reqem = reqem + nomre;
    document.getElementById("netice").innerHTML = reqem;
    document.getElementById("netice1").innerHTML = reqem;

}

function noqteQoy() {
    reqem = document.getElementById("netice").innerHTML
    reqem = reqem + "."
    document.getElementById("netice").innerHTML = reqem;
    document.getElementById("netice1").innerHTML = reqem;
}

function resett() {
    reset = document.getElementById("netice").innerHTML
    reset = "";
    document.getElementById("netice").innerHTML = reset;
}

function azaltReqemi() {
    reqem = document.getElementById("netice").innerHTML
    document.getElementById("netice").innerHTML = reqem.substring(0, reqem.length - 1);


} function emelVurma() {
    reqem = document.getElementById("netice").innerHTML
    reqem = reqem + "*"
    document.getElementById("netice").innerHTML = reqem;
    document.getElementById("netice1").innerHTML = reqem;

}

function emelBolme() {
    reqem = document.getElementById("netice").innerHTML
    reqem = reqem + "/"
    document.getElementById("netice").innerHTML = reqem;
    document.getElementById("netice1").innerHTML = reqem;

}
function emelCixma() {
    reqem = document.getElementById("netice").innerHTML
    reqem = reqem + "-"
    document.getElementById("netice").innerHTML = reqem;
    document.getElementById("netice1").innerHTML = reqem;

}
function emelToplama() {
    reqem = document.getElementById("netice").innerHTML
    reqem = reqem + "+"
    document.getElementById("netice").innerHTML = reqem;
    document.getElementById("netice1").innerHTML = reqem;

}

function yoxlama() {
    if (isNaN(eval(neticemiz)) !== false) { alert("Səhflik var") }
}

function netice() {
    neticemiz = document.getElementById("netice").innerHTML
    yoxlama();
    document.getElementById("netice1").innerHTML = neticemiz + "=" + eval(neticemiz)
    document.getElementById("netice").innerHTML = eval(neticemiz)

}


