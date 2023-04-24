//DECLARATION
const button_encry = document.getElementById("button-encry");
const button_desencry = document.getElementById("button-desencry");
const button_copy = document.getElementById("button-copy");
const text_Entry = document.getElementById("Text-Entry");
const text_Out = document.getElementById("Text-Out");

//VALIDATION MAYÚS & ACENTO
function Validacion() {
  const Valide = document.getElementById("Text-Entry").value;
  const Rectifica = /^[a-z\sñ]+$/g;
  const Vali = Rectifica.test(Valide);

  if (!Vali) {
    document.getElementById("Text-Entry").value = '';
    document.getElementById("imga").style.display = "show";
    document.getElementById("imga").style.display = "inherit";
    document.getElementById("text-tittle").style.display = "show";
    document.getElementById("text-tittle").style.display = "inherit";
    document.getElementById("text-tittle2").style.display = "show";
    document.getElementById("text-tittle2").style.display = "inherit";
    document.getElementById("button-copy").style.display = "none";
    document.getElementById("Text-Out").style.display = "none";
  }

}

//FUNTION HIDE
function Esconder() {
  document.getElementById("imga").style.display = "none";
  document.getElementById("text-tittle").style.display = "none";
  document.getElementById("text-tittle2").style.display = "none";
  document.getElementById("button-copy").style.display = "show";
  document.getElementById("button-copy").style.display = "inherit";
  document.getElementById("Text-Out").style.display = "show";
  document.getElementById("Text-Out").style.display = "inherit";
};


//FUNTION ENCRYPT
function Encriptar() {
  Esconder();
  Validacion();

  var TextMsg = text_Entry.value;
  var EncryText = TextMsg
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  text_Out.value = EncryText;
};

//FUNTION DESCRYPT
function Desencriptar() {
  Esconder();
  Validacion();

  var EncryMsg = text_Entry.value;
  var TextMsg = EncryMsg
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  text_Out.value = TextMsg;
};

//FUNTION COPY
function Copiar() {
  var EncryMsg = text_Out.value;
  navigator.clipboard.writeText(EncryMsg);
  text_Entry.value = " ";
  text_Entry.focus();
};

//CALL FUNCTION
button_encry.onclick = Encriptar;
button_desencry.onclick = Desencriptar;
button_copy.onclick = Copiar;

