const now = new Date
const tempo = now.getHours();

if( tempo < 16 && tempo > 6 ) {

    const conteudo = document.querySelector("body");

    conteudo.style.background = "#fed02e";

 } else {

    const conteudo = document.querySelector("body");

    conteudo.style.background = "#1000ff";
}

