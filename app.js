let numeroSorteados = [];
let possibilidadeDeNumerosPraSortear = 100;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1; 

function exibirTexto (tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

exibirTexto('h1', 'Encontre o número secreto');
exibirTexto('p', 'Escolha um número entre 1 a 100');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        exibirTexto('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas}  ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        if (chute > numeroSecreto) {

            exibirTexto('p', 'O número secreto é menor');

        } else {

            exibirTexto('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();
    }
    
}

function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {

    exibirTexto('h1', 'Encontre o número secreto');
    exibirTexto('p', 'Escolha um número entre 1 a 100');
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;  
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio () {

    let numeroEscolhido = parseInt(Math.random()* possibilidadeDeNumerosPraSortear + 1);
    let quantidadeElementosNaLista = numeroSorteados.length;

    if (quantidadeElementosNaLista == possibilidadeDeNumerosPraSortear) {
        numeroSorteados = [];
    }

    if (numeroSorteados.includes(numeroEscolhido)) {

        return gerarNumeroAleatorio();

    } else {

        numeroSorteados.push(numeroEscolhido); 
        return numeroEscolhido; 
    }
}