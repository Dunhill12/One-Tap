exports.run = async (client, message, args) => {

    let guild = message.guild;
    let ab = args[0];
    // Si l'autheur du message n'est pas dans un voice channel je l'alerte
    if (!guild.members.cache.get(message.author.id).voice.channel) return message.reply("You are not in a VC !");
    let authorChannel = message.member.voice.channel;
    if(!authorChannel.permissionOverwrites.get(message.author.id).allow.has(269485056)) return message.reply("You are not VC owner !");
    if(!ab) return message.reply("Specify a number !")
    if(isNaN(ab)) return message.reply("Specify a number limit !");
    if((ab < 0)|| (ab > 99)) return message.reply("number limit of 99 !");
        authorChannel.edit({userLimit : ab });
        message.reply("Channel limit of "+ab+" :white_check_mark:")
    }