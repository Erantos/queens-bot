import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const menuCmd = {
    data: new SlashCommandBuilder()
        .setName('menu-queens')
        .setDescription('Donne le menu du Queens'),

    async execute(interaction: any) {
        const burgerEmbed = new EmbedBuilder()
            .setColor(0xFFA500) // couleur orange
            .setTitle('🍔 Carte burger')
            .addFields(
                { name: '👨‍🍳 Chef', value: 'Crème de cheddar, tranche de cheddar, bacon, ketchup maison, pickle cornichon, oignons confits' },
                { name: '🫠 Dirty', value: 'Crème de cheddar, crème de comté, oignons frits, bacon, cheddar, comté, morbier, romarin' },
                { name: '⚫ Black Pepper', value: 'Sauce aux 3 poivres, oignons frits, thym, morbier, chips de jambon cru, réduction de vinaigre balsamique' },
                { name: '🌴 Estaté', value: 'Pesto de tomates séchées, basilic, olives vertes, chips de jambon cru, tagliatelles de carottes et oignons frits' },
                { name: '☀️ Verano', value: 'Crème de chorizo, thym et poivre noir, grana padano, éclats d\'amandes, oignons frits' },
                { name: '🇧‎🇸 Burger semaine', value: 'Une nouvelle recette à découvrir chaque semaine' }
            );

        const asianEmbed = new EmbedBuilder()
            .setColor(0xFFA500)
            .setTitle('🥢 Carte Asiatique')
            .addFields(
                { name: '🧄 Garlic pepper', value: 'Pops up de poulet panés, sautés "ail et poivre", riz et légumes, herbes aromatiques, oignons frits' },
                { name: '🐯 Larme du tigre', value: 'Tataki de boeuf, sauce citron vert-piment, riz torréfié, riz et légumes, herbes aromatiques' },
                { name: '🍜 Pad thaï', value: 'Vermicelles de riz sautées "oeufs et petites crevettes", sauce au tamarin, légumes, herbes aromatiques, cacahuètes (poulet / crevettes / poulet crunchy)' },
                { name: '🍛 Curry rouge', value: 'Pâte de curry maison, crème de coco, riz et légumes, herbes aromatiques (poulet / crevettes)' },
                { name: '🐂 Boeuf aux épices', value: 'Boeuf mariné aux épices, sauce aux champignons parfumés, pickles de bambou, riz et légumes, herbes aromatiques' },
                { name: '🍱 Bô Bun', value: 'Salade de vermicelles de riz, nems au porc, crudités, herbes aromatiques, cacahuètes (boeuf citronnelle / crevettes / poulet crunchy)' },
                { name: '🇵‎🇩‎🇲 Plat du moment', value: 'Une recette chaque semaine selon l\'humeur du chef !' },
            )

        // Réponse à la commande slash
        await interaction.reply({
            content: "Régalez vous la team !",
            embeds: [burgerEmbed, asianEmbed]
        });
    },
};