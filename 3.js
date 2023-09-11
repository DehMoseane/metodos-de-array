function capturarCarros(carros, posicao) {
    if (posicao >= 0 && posicao < carros.length - 2) {
        const carrosCapturados = carros.slice(posicao, posicao + 3);
        console.log(carrosCapturados.join(' - '));
    } else {
        console.log("Posição inválida para capturar os carros subsequentes.");
    }
}

const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
capturarCarros(carros, posicao);
