const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.channel.permissionsFor(message.author).has('ADMINISTRATOR')) return;
    const user = message.author;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    const embed = new Discord.MessageEmbed()
    .setAuthor('・HELP', user.avatarURL({ format: 'gif'}))
    .setDescription("Systeme des rooms tempo ! Notre prefix est : v!")
    .setColor(randomColor)
    .addField("`v!permit`", `Give a user access to join the channel`)
    .addField("`v!reject`", `Remove access to a user from joining the channel`)
    .addField("`v!limit`", `Limit the number of users in the channel`)
    .addField("`v!lock`", `Block the users from joining the channel`)
    .addField("`v!unlock`", `Unblock the channel`)
    .addField("`v!ghost`", `Make the channel invisible`)
    .addField("`v!show`", `Make the channel visible`)

message.channel.send(embed);
}
