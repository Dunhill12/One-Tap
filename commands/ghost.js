exports.run = async (client, message, args) => {

    let guild = message.guild;
    let ided = message.guild.id;
    // Si l'autheur du message n'est pas dans un voice channel je l'alerte
    if (!guild.members.cache.get(message.author.id).voice.channel) return message.reply("You are not in a VC !");
    let authorChannel = message.member.voice.channel;
    if(!authorChannel.permissionOverwrites.get(message.author.id).allow.has(269485056)) return message.reply("You are not VC owner !");
        authorChannel.updateOverwrite(ided, { VIEW_CHANNEL: false });
        message.reply("Channel ghosted :white_check_mark:")
    }