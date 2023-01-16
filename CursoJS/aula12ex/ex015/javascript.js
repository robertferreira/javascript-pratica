function confirmar(){
    var body = window.document.querySelector("body");
    var img_imagem = window.document.getElementById("imagem");

    var manha_checked = window.document.querySelector("input#manha");
    var tarde_checked = window.document.querySelector("input#tarde");
    var noite_checked = window.document.querySelector("input#noite");

    if (manha_checked.checked) {
    img_imagem.src = "manha.jpg";
    body.style.backgroundColor = "#ffecbd";
    }
    else if (tarde_checked.checked) {
    img_imagem.src = "tarde.jpg";
    body.style.backgroundColor = "#a7ccff";
    }
    else if (noite_checked.checked) {
    img_imagem.src = "noite.jpg";
    body.style.backgroundColor = "#44527c";
    }
}