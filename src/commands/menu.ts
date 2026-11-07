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
                { name: '👨‍🍳 Chef', value: 'Crème de cheddar, ketchup, pickles de cornichon, bacon, cheddar, oignons frits, iceberg et mesclun' },
                { name: '🫠 Dirty', value: 'Crème de comté, crème de cheddar, romarin, bacon, morbier, comté, cheddar, oignons frits, iceberg et mesclun' },
                { name: '⚫ Black Pepper', value: 'Sauce aux 3 poivres, thym, morbier, réduction de balsamique, chips de jambon cru, oignons frits, iceberg et mesclun' },
                { name: '🍂 Bosqué', value: 'Crème de champignons, chips de jambon cru, thym et poivre noir, éclats de noix, oignons frits, iceberg et mesclun' },
                { name: '🫕 Saboya', value: 'Sauce Mornay, basilic séché, raclette au lait cru, bacon, paprika fumé, oignons frits, iceberg et mesclun' },
                { name: '🇧‎🇸 Burger semaine', value: 'Une nouvelle recette à découvrir chaque semaine' }
            );

        const asianEmbed = new EmbedBuilder()
            .setColor(0xFFA500)
            .setTitle('🥢 Carte Asiatique')
            .addFields(
                { name: '🧄 Garlic pepper', value: 'Pops up de poulet panés, sautés "ail et poivre", riz et légumes, herbes aromatiques, oignons frits' },
                { name: '🐯 Larme du tigre', value: 'Tataki de boeuf, sauce citron vert-piment, riz torréfié, riz et légumes, herbes aromatiques' },
                { name: '🍜 Pad thaï', value: 'Vermicelles de riz sautées "oeufs et petites crevettes", sauce au tamarin, légumes, herbes aromatiques, cacahuètes (poulet / crevettes / poulet crunchy)' },
                { name: '🍝 Nouilles au saté', value: 'Nouilles de riz sautées aux oeufs et sauce soja noire, légumes, herbes aromatiques, cacahuètes (boeuf / crevettes)' },
                { name: '🍛 Curry vert', value: 'Pâte de curry à la citronnelle et piment, crème de coco, riz et légumes, herbes aromatiques (poulet / crevettes)' },
                { name: '🍲 Fondue thaï', value: 'Soupe de nouilles de riz, bouillon saté-coco-cacahuètes, légumes et herbes aromatiques (boeuf / crevettes)' },
                { name: '🇵‎🇩‎🇲 Plat du moment', value: 'Une recette chaque semaine selon l\'humeur du chef !' },
            )

        // Réponse à la commande slash
        await interaction.reply({
            content: "Régalez vous la team !",
            embeds: [burgerEmbed, asianEmbed]
        });
    },
};