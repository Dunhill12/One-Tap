exports.run = async (client, message, args) => {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      if(!message.channel.permissionsFor(message.author).has('ADMINISTRATOR')) return;
    try{
        message.guild.channels.create('Voice Channels', {
            type: 'category',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    allow: ['VIEW_CHANNEL'],
                    allow: ['CONNECT']
                },
            ],
          })
    } catch (err) {
        console.log(err)
    }
    await sleep(2000);
    try {
            let categ = message.guild.channels.cache.find(x => x.name === "Voice Channels");
            message.guild.channels.create('One Tap', {
              type: 'voice',
              parent: categ,
              userLimit: 1,
              permissionOverwrites: [
                  {
                      id: message.guild.id,
                      allow: ['VIEW_CHANNEL'],
                  },
              ],
            })
          } catch (err) {
        console.log(err);
      }
    }
