require('dotenv').config();
const axios = require('axios');
const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client ({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]});

client.on('ready', ()=>{
    console.log('el bot esta listo')
})

client.on('messageCreate', async (mensaje) =>{

if(mensaje.content === 'Hola'){
    mensaje.reply({
        content: 'Bienvenido'
    })
}else if (mensaje.content === 'Como estas'){
    mensaje.reply({
        content: 'Bien, ¿y tu?'
    })
}else if  (mensaje.content === 'Adios'){
    mensaje.reply({
        content: 'Hasta pronto!'
    })
}else if (mensaje.content === 'dime una frase'){
    let frase = await axios.get('https://api.quotable.io/random');
    const respuesta = frase.data.content;

    mensaje.reply({
        content: respuesta 
    })
}else if(mensaje.content === 'bolivares'){

    const Monitor = require('consulta-dolar-venezuela');


    Monitor.getMonitor()
    .then($ => mensaje.reply({
        content:  $.bcv.price.toString()
    }))
    
    
  
}



})


client.login (process.env.TOKENBOT)