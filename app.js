function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numerosCriados;

    for(let i = 0; i <= quantidadeDeNumeros; i++){
        numerosCriados = obterNumeroAleatorio(doNumero, ateNumero);
        numerosSorteados.push(numerosCriados);
    }

    console.log(numerosSorteados);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}