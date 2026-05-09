import { SlashCommandBuilder } from "discord.js";
import { parseBurger } from "../parser/parse-burger.js";

export const parseBurgerCmd = {
    data: new SlashCommandBuilder()
        .setName('parse-burger')
        .setDescription("Renvoie le nom complet d'un burger à partir de son abbréviation")
        .addStringOption((option) => option.setName('burger').setDescription("L'abbréviation à vérifier").setRequired(true)),

    async execute(interaction: any) {
        const abbr = interaction.options.getString('burger') as string;
        const res = parseBurger(abbr);

        await interaction.reply(res ? `${abbr} -> ${res}` : `Aucun burger ne correspond à "${abbr}"`);
    }
}