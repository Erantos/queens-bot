import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.DISCORD_TOKEN

client.once(Events.ClientReady, (readyClient: any) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);