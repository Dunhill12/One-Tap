module.exports = async (client, oldMember, newMember) => {
    let newUserChannel = newMember.channel;
    let oldUserChannel = oldMember.channel;

    if(newUserChannel){
        if(newUserChannel.name == 'One Tap') {
                let us = newMember.guild.members.cache.get(newMember.id);
                let cate = newMember.guild.channels.cache.find(x => x.name === "Voice Channels");
                newMember.guild.channels.create("Pv "+us.displayName, {
                    type: 'voice',
                    parent: cate,
                    userLimit: 0,
                    permissionOverwrites: [
                        {
                            id: newMember.id,
                            allow: ['CONNECT', 'MANAGE_ROLES','VIEW_CHANNEL'],
                        },
                    ],
                }).then(function (chan) {
                    newMember.member.voice.setChannel(chan);
                });
        }
        
    }
    if(oldUserChannel){
        if(oldUserChannel.name.startsWith("Pv ")){
            oldMember.guild.channels.cache.map(async channel =>{
                if(channel.type !== 'voice') return;
                if(!channel.name.startsWith("Pv ")) return;
                if(channel.members.size == 0) await channel.delete();
            })
        }
    }
}