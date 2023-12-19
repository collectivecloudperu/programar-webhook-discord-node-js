
const cron = require("node-cron"); // Instancio el paquete 'node-cron' 
const express = require("express"); // Instancio el paquete 'express' 

// Creo una variable llamada 'app' y en ella coloco el método express(); del paquete 'express' 
const app = express();

// En el campo segundo coloc '*/5' para ejecutar una tarea en consola cada 5 segundos 
cron.schedule("*/5 * * * * *", function () {

  // Enviamos un mensaje mediante Webhook a Discord
  var url = "https://discordapp.com/api/webhooks/1186739053303963688/U7f7t_7JalEyFC47_A1ibV8BUBhBZOwufK9whb6HxMnGZCaPn9D5C7CS-LSMnGXQ3CKS"
  var text = {
    "username": "Webhook",
    "avatar_url": "https://i.imgur.com/4M34hi2.png",
    "content": "Text message. Up to 2000 characters.",
    "embeds": [
      {
        "author": {
          "name": "Birdie♫",
          "url": "https://www.reddit.com/r/cats/",
          "icon_url": "https://i.imgur.com/R66g1Pe.jpg"
        },
        "title": "Title",
        "url": "https://google.com/",
        "description": "Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`",
        "color": 15258703,
        "fields": [
          {
            "name": "Text",
            "value": "More text",
            "inline": true
          },
          {
            "name": "Even more text",
            "value": "Yup",
            "inline": true
          },
          {
            "name": "Use `\"inline\": true` parameter, if you want to display fields in the same line.",
            "value": "okay..."
          },
          {
            "name": "Thanks!",
            "value": "You're welcome :wink:"
          }
        ],
        "thumbnail": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"
        },
        "image": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg"
        },
        "footer": {
          "text": "Woah! So cool! :smirk:",
          "icon_url": "https://i.imgur.com/fKL31aD.jpg"
        }
      }
    ]
  }
  
  
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
