exports.run = async (client, message, args) => {

let guild = message.guild;
let ab = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
// Si l'autheur du message n'est pas dans un voice channel je l'alerte
if (!guild.members.cache.get(message.author.id).voice.channel) return message.reply("You are not in a VC !");
let authorChannel = message.member.voice.channel;
if(!authorChannel.permissionOverwrites.get(message.author.id).allow.has(269485056)) return message.reply("You are not VC owner !");
if(!ab) return message.reply("Invalid member");
    authorChannel.updateOverwrite(ab, { CONNECT: true });
    message.reply("<@"+ab+"> "+" allowed access")
}