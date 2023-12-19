
const cron = require("node-cron"); // Instancio el paquete 'node-cron' 
const express = require("express"); // Instancio el paquete 'express' 

// Creo una variable llamada 'app' y en ella coloco el método express(); del paquete 'express' 
const app = express();

// En el campo segundo coloc '*/5' para ejecutar una tarea en consola cada 5 segundos 
cron.schedule("*/5 * * * * *", function () {

  // Enviamos un mensaje mediante Webhook a Discord
  var url = "https://discordapp.com/api/webhooks/1186739053303963688/U7f7t_7JalEyFC47_A1ibV8BUBhBZOwufK9whb6HxMnGZCaPn9D5C7CS-LSMnGXQ3CKS"
  var text = {content: "Hola"}
  
  
  fetch(url, 
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(text),
    }
  ).then((response) => {
    console.log(response);
  });   

});


// Ejecutamos la aplicación en el puerto 3000
app.listen(3000);
