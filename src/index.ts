import { Client, Collection, Events, GatewayIntentBits, MessageFlags } from "discord.js";
import { menuCmd } from "./commands/menu.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) as Client & { commands: Collection<unknown, unknown> }
const token = process.env.DISCORD_TOKEN;

client.once(Events.ClientReady, (readyClient: any) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

const commandsCollection = new Collection<any, any>();
commandsCollection.set(menuCmd.data.name, menuCmd);

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = commandsCollection.get(interaction.commandName);
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error while executing this command!',
                flags: MessageFlags.Ephemeral,
            });
        } else {
            await interaction.reply({
                content: 'There was an error while executing this command!',
                flags: MessageFlags.Ephemeral,
            });
        }
    }
});

client.login(token);