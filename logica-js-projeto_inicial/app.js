alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 2;
console.log(`O numero secreto é ${numeroSecreto}`);
let chute;

//enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 10");
    console.log("O chute foi " + chute);
    console.log(`Resultado da comparação ${numeroSecreto == chute}`)

    // se o chute for igual ao nummero secreto
    if (chute == numeroSecreto){
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`)
    }else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

