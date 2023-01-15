function carregar(){
    var body = window.document.querySelector("body");
    var div_img = window.document.getElementById("img");
    var img_imagem = window.document.getElementById("imagem");
    var hora = new Date().getHours();
    div_img.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
    img_imagem.src = "manha.jpg";
    body.style.backgroundColor = "#ffecbd";
    }
    else if (hora >= 12 && hora < 18) {
    img_imagem.src = "tarde.jpg";
    body.style.backgroundColor = "#a7ccff";
    }
    else {
    img_imagem.src = "noite.jpg";
    body.style.backgroundColor = "#44527c";
    }
}