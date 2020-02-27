
let myContainer = document.getElementById('hola') as HTMLInputElement;
myContainer.value="hola";
const request = require("request-promise"),
    RUTA = "https://jsonplaceholder.typicode.com/users";

request({
    uri: RUTA,
    json: true, // Para que lo decodifique automáticamente 
}).then((usuarios: any[]) => {
    usuarios.forEach(usuario => {
        console.log(`Tenemos a un usuario llamado ${usuario.name} con correo ${usuario.email}`);
        
    })
});