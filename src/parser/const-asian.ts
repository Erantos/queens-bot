export const proteinMap = {
    "B": "Boeuf",
    "C": "Crevettes",
    "P": "Poulet",
    "PC": "Poulet Crunchy"
}

type Protein = keyof typeof proteinMap;
export type AsianDish = { name: string, availProt?: [Protein, ...Protein[]] } // Ensure non empty list

export const dishMap = {
    "GP": { name: "Garlic Pepper" },
    "LT": { name: "Larme du Tigre" },
    "LDT": { name: "Larme du Tigre" },
    "PT": { name: "Pad Thaï", availProt: ['C', 'P', 'PC'] },
    "NS": { name: "Nouilles Au Saté", availProt: ['B', 'C'] },
    "NAS": { name: "Nouilles Au Saté", availProt: ['B', 'C'] },
    "CV": { name: "Curry Vert", availProt: ['P', 'C'] },
    "FT": { name: "Fondue Thaï", availProt: ['B', 'C'] },
    "PDM": { name: "Plat Du Moment" }
} satisfies Record<string, AsianDish>

