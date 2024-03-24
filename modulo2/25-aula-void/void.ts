// Funções

function logError(errorMessage: string): void {
    console.log(errorMessage);
}

logError('Required field - Name!');

// Arrow function

const logErrorExemple2 = (errorMessage: string): void => {
    console.log(errorMessage);
    // return null; //! erro
}

logErrorExemple2('Required filed - Surname');

// Variáveis

let exemploVoid: void;
// exemploVoid = 1; //! erro
// exemploVoid = null; //! erro se não desativar strictNullChecks no tsConfig.json
exemploVoid = undefined;

console.log(exemploVoid)