// numeric Enums

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}
console.log(Idioma);
console.log(Idioma['0']);
console.log(Idioma.Portugues);

// String Enums

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI'
}

console.log(Dia.Segunda);

// Usando const

const enum Comida {
    Hamburguer,
    Massa,
    Pizza,
    Churrasco
}

function comida(c: Comida){
    return 'Comida muito apetitosa';
}

console.log(comida(Comida.Hamburguer));
console.log(comida(Comida.Churrasco));
// console.log(comida(5)); erro

// Quando usar enums?

enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
};

if (concluidaTarefa.status === Tarefa.Done){
    console.log('Enviar e-mail: Tarefa Concluída!');
}