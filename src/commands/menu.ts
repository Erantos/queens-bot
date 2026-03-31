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
                { name: '🎃 Squeenshy', value: 'Crème de potimarron au piment d\'espelette, thym et chorizo grillé, noisettes et poivre de séchuan et oignons frits' },
                { name: '🏔️ Mountain', value: 'Crème de reblochon, romarin et bacon, raclette fumée, éclats de noix, oignons frits' },
                { name: '🇧‎🇸 Burger semaine', value: 'Une nouvelle recette à découvrir chaque semaine' }
            );

        const asianEmbed = new EmbedBuilder()
            .setColor(0xFFA500)
            .setTitle('🥢 Carte Asiatique')
            .addFields(
                { name: '🐯 Larme du tigre', value: 'Tataki de boeuf, sauce citron vert-piment, pesto de basilic thaï, riz et légumes, riz torréfié et herbes aromatiques' },
                { name: '🧄 Garlic pepper', value: 'Pop up de poulet panés et sautés "ail et poivre", riz et légumes, herbes aromatiques' },
                { name: '🍜 Pad thaï', value: 'Vermicelles de riz sautées aux oeufs et crevettes, sauce au tamarin, légumes sautés, herbes aromatiques et cacahuètes (poulet / crevettes / poulet crunchy)' },
                { name: '🍲 Fondue thaï', value: 'Nouilles de riz, bouillon saté-coco, légumes, cacahuètes, herbes aromatiques (boeuf / crevettes)' },
                { name: '🍛 Curry rouge', value: 'Pâte de curry maison au piment, crème de coco, riz et légumes, herbes aromatiques, cacahuètes (poulet / crevettes)' },
                { name: '🐷 Porc au saté', value: 'Porc rôti, mariné au saté, riz et légumes, sauce gingembre - sésame, herbes aromatiques' },
                { name: '🇵‎🇩‎🇲 Plat du moment', value: 'Une recette chaque semaine selon l\'humeur du chef !' },
            )

        // Réponse à la commande slash
        await interaction.reply({
            content: "Régalez vous la team !",
            embeds: [burgerEmbed, asianEmbed]
        });
    },
};