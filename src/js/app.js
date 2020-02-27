"use strict";
var myContainer = document.getElementById('hola');
myContainer.value = "hola";
var request = require("request-promise"), RUTA = "https://jsonplaceholder.typicode.com/users";
request({
    uri: RUTA,
    json: true,
}).then(function (usuarios) {
    usuarios.forEach(function (usuario) {
        console.log("Tenemos a un usuario llamado " + usuario.name + " con correo " + usuario.email);
    });
});
