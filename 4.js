function gerenciarFilaClinica(fila, operacao, nomePaciente) {
    if (operacao === 'agendar') {
        fila.push(nomePaciente);
    } else if (operacao === 'atender') {
        if (fila.length > 0) {
            fila.shift();
        } else {
            console.log("A fila está vazia, não há pacientes para atender.");
        }
    } else {
        console.log("Operação inválida. Use 'agendar' ou 'atender'.");
    }

    console.log(fila.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

gerenciarFilaClinica(pacientes, 'agendar', 'Carlos');

gerenciarFilaClinica(pacientes, 'atender');

gerenciarFilaClinica(pacientes, 'atender');

gerenciarFilaClinica(pacientes, 'outro', 'Lucas');
