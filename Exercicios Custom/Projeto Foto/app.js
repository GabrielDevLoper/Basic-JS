function carregarPhoto(){
    var nome = document.querySelector("#txtNome").value.toUpperCase();
    var img = document.querySelector("#imagem");
    var ver = document.querySelector("#ver");

    if(nome == "GABRIEL" || nome == "GABRIEL SANTOS"){
        img.src = "img/GABRIEL.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "FELIPE" || nome == "ANDRE FELIPE"){
        img.src = "img/FELIPE.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "ANA CAMILLA" || nome == "CAMILLA"){
        img.src = "img/CAMILLA.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "OSVALDO"){
        img.src = "img/OSVALDO.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "FABIO"){
        img.src = "img/FABIO.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "EWELLIN"){
        img.src = "img/EWELLIN.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "BRUNO"){
        img.src = "img/BRUNO.png";
        ver.innerHTML = `${nome}`;
    }else if(nome == "CAMILA" || nome == "CAMILA MELO"){
        img.src = "img/CAMILLA MELO.png";
        ver.innerHTML = `${nome}`;
    }else{
        img.src = "img/anonimo.png";
        ver.innerHTML = `'${nome}' Está pessoa não esta cadastrada no sistema!`;
    }

}