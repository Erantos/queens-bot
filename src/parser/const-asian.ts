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
    "PC": { name: "Porc au Caramel" },
    "PAC": { name: "Porc au Caramel" },
    "BB": { name: "Bô Bun", availProt: ['B', 'C', 'PC'] },
    "PDM": { name: "Plat Du Moment" }
} satisfies Record<string, AsianDish>

