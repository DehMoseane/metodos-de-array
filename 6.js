function encontrarDono(petProcurado, usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (usuario.pets.includes(petProcurado)) {
            console.log(`O dono(a) do(a) ${petProcurado} é o(a) ${usuario.nome}`);
            return;
        }
    }
    console.log(`Que pena ${petProcurado}, não encontramos seu dono(a).`);
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

encontrarDono("Max", usuarios);

