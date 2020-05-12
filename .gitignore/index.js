const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("_")

bot.on('ready', function() {
    bot.user.setActivity("_help");
    console.log("Connected");
});

bot.login("[TOKEN]");


bot.on('message', message => {
    if (message.content === prefix + "help" ){
        message.channel.send("Liste des commandes: \n il n'y a pas encore de commandes ^^ ");
    }

    if (message.content === "salut"){
        message.reply("bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
    
     if (message.content === "slt"){
        message.reply("bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "bjr"){
        message.reply("bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "bonjour"){
        message.reply("bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "cv"){
        message.reply("je pense que je peux pas aller mieux ^^ ");
        console.log("Commande Salut effectué");
    }

    if (message.content === "ca vas"){
        message.reply("je pense que je peux pas aller mieux ^^ ");
        console.log("Commande Salut effectué");
    }

    if (message.content === "ça vas"){
        message.reply("je pense que je peux pas aller mieux ^^ ");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tfk"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi?"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi ?"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi ??"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi??"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi???"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }

    if (message.content === "tu fait quoi ???"){
        message.reply("moi ? je vous tien companie");
        console.log("Commande Salut effectué");
    }
});
