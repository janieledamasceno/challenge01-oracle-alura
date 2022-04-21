const input = document.querySelector("textarea");
const saida = document.querySelector(".answer");
const cript = document.querySelector(".button1");
const descript = document.querySelector(".button2");
const copiar = document.querySelector(".content-copy");
const copiado = document.querySelector(".text-copied");
let textCrip;
let textDescrip;

function criptografar() {
    if (input.value != "") {
        textCrip = input.value.replace(/e/g, "emb");
        textCrip = textCrip.replace(/i/g, "int");
        textCrip = textCrip.replace(/a/g, "ale");
        textCrip = textCrip.replace(/o/g, "omi");
        textCrip = textCrip.replace(/u/g, "ule");

        saida.textContent = textCrip;
        copiar.classList.add("show");
        input.value = "";
    }
}

function descriptografar() {
    if (input.value != "") {
        textCrip = input.value.replace(/emb/g, "e");
        textCrip = textCrip.replace(/int/g, "i");
        textCrip = textCrip.replace(/ale/g, "a");
        textCrip = textCrip.replace(/omi/g, "o");
        textCrip = textCrip.replace(/ule/g, "u");

        saida.textContent = textCrip;
        copiar.classList.add("show");
        input.value = "";
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(saida.textContent);
    copiado.classList.add("show");
    setTimeout("removeBotao()", 1000);
}

function removeBotao() {

    copiado.classList.remove("show");
}

cript.addEventListener("click", criptografar);

descript.addEventListener("click", descriptografar);

copiar.addEventListener("click", copiarTexto);