function executar(){
    let inicio = document.querySelector("#inicio");
    let fim = document.querySelector("#fim");
    let passo = document.querySelector("#passo");
    let conteudo = document.querySelector("#conteudo");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //PROIBIDO
        window.alert("[ERRO] Faltam dados");
    }else{
        conteudo.innerHTML = "Contando: <br>";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            window.alert("Passo Inválido! Considerando passo 1");
            p = 1;
        }

        if(i < f){
            //Contagem Crescente
            for(let x = i; x <= f; x += p){
                conteudo.innerHTML += `${x} \u{1F449}`;
             }
             conteudo.innerHTML += "\u{1F3C1}";
        }else{
            //Contagem Decrescente
            for(let x = i; x >= f; x -= p){
                conteudo.innerHTML += `${x} \u{1F449}`;
            }
            conteudo.innerHTML += "\u{1F3C1}";
        }
       
        
    }
    
}