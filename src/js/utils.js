const message = () => {
    console.log('Hola soy utils');
}

const executePromise = async () => {
    await console.log('soy una promesa');
}

export {
    message,
    executePromise
};