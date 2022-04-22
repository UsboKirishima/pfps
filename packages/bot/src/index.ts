import { Client, Message, MessageEmbed } from 'discord.js';
import Redis from 'ioredis';

const prefix = '?';
const redis = new Redis();

const client: Client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_VOICE_STATES"
    ]
})

client.on('ready', async (): Promise<void> => {
    console.log('Online');
    await client.user.setActivity({
        name: 'you <$',
        type: 'LISTENING'
    })
})

client.on('messageCreate', async (message: Message): Promise<any> => {
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);

    switch (args[0]) {
        case 'set': {
            interface pfpsOpts {
                name: string;
                author: string;
                url: string;
                category: string;
            }

            let pfps: pfpsOpts = {
                name: 'AnimeGif',
                author: '848463685374443530',
                url: 'https://images-ext-1.discordapp.net/external/a1n8yhTGfgr-dZ6f9ZKWpweHA42cGL9nONLc5Tm_4Cs/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/848463685374443530/a_5c7254976ea563b70d341031ba745374.gif?width=86&height=86',
                category: 'drip'
            }

            redis.hmset(`pfps`, pfps);
        } break;
        case 'get': {
            
        } break;
        default: {
            return;
        } break;
    }
})