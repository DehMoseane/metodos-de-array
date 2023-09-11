function agendarPaciente(fila, paciente) {
    fila.push(paciente);
    console.log(fila.join(', '));
}

function atenderPaciente(fila) {
    if (fila.length > 0) {
        fila.shift();
    } else {
        console.log("A fila está vazia, não há pacientes para atender.");
    }
    console.log(fila.join(', '));
}

function cancelarAtendimento(fila, paciente) {
    const index = fila.indexOf(paciente);
    if (index !== -1) {
        fila.splice(index, 1);
    } else {
        console.log(`${paciente} não está na fila de atendimento.`);
    }
    console.log(fila.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

agendarPaciente(pacientes, 'Carlos');

atenderPaciente(pacientes);

cancelarAtendimento(pacientes, 'Maria');

cancelarAtendimento(pacientes, 'Lucas');
