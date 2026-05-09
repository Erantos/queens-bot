import { SlashCommandBuilder } from "discord.js";
import { parseBurger } from "../parser/parse-burger.js";
import { parseAsian } from "../parser/parse-asian.js";

export function parseOrder(abbr: string) {
    const burger = parseBurger(abbr);
    if (burger) return burger;

    return parseAsian(abbr);
}

export const parseOrderCmd = {
    data: new SlashCommandBuilder()
        .setName('parse-order')
        .setDescription("Renvoie le nom complet d'une commande à partir de son abbréviation")
        .addStringOption((option) => option.setName('order').setDescription("L'abbréviation à vérifier").setRequired(true)),

    async execute(interaction: any) {
        const abbr = interaction.options.getString('order') as string;
        const res = parseOrder(abbr);

        await interaction.reply(res ? `${abbr} -> ${res}` : `Commande invalide: "${abbr}"`);
    }
}