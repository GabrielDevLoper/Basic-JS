var numero = document.querySelector("#txtNumero");
var tabuada = document.querySelector("#seltab");

function gerarTabuada(){
   
    
    if(numero.value.length == 0 ){
        window.alert("Número não inserido!");
    }else{
        let n = Number(numero.value);
        tabuada.innerHTML = "";
        for(let i = 0; i <= 10; i++){
            let item = document.createElement("option");
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tabuada${i}`
            tabuada.appendChild(item);
        }
    }
    
    
}