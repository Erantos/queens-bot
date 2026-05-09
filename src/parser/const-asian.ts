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
    "CR": { name: "Curry Rouge", availProt: ['P', 'C'] },
    "BE": { name: "Boeuf aux épices" },
    "BAE": { name: "Boeuf aux épices" },
    "BB": { name: "Bô Bun", availProt: ['B', 'C', 'PC'] },
    "PDM": { name: "Plat Du Moment" }
} satisfies Record<string, AsianDish>

