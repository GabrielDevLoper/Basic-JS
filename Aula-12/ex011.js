var idade = 21;
console.log(`Você tem ${idade} anos.`);
if(idade >= 18 && idade <= 65 ){
    console.log("Seu Voto é Obrigatório");
}else if(idade < 18 && idade >= 16 || idade > 65){
        console.log("Seu voto é Voto Opcional");
}else{
    console.log("Você não pode votar !");
}
