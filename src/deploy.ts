import { REST, Routes } from 'discord.js';
import { menuCmd } from './commands/menu.js';

const token = process.env.DISCORD_TOKEN ?? "";
const clientId = process.env.CLIENT_ID ?? "";

const commands = [menuCmd];
const rest = new REST().setToken(token);

(async () => {
    try {
        const jsonCmds = commands.map(c => c.data.toJSON());
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data: any = await rest.put(Routes.applicationCommands(clientId), { body: jsonCmds });
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    }
    catch (error) {
        console.error(error);
    }
})();