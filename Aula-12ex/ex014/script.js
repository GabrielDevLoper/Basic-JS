function carregar(){
    var msg = document.querySelector("#msg");
    var img = document.querySelector("#imagem");
    
    var data = new Date();
    //var hora = data.getHours();
    hora = 15;
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora < 12){
        //BOM DIA!
        img.src = "Foto-Manha.png";
        document.body.style.background = "#deb278";
    }else if(hora < 18){
        //BOA TARDE!
        img.src = "Foto-Tarde.png";
        document.body.style.background = "#94a3ba";
    }else{
        //BOA NOITE!
        img.src = "Foto-Noite.png";
        document.body.style.background = "#21313e";
    }

}