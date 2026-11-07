import { expect, test, describe } from 'vitest'
import { parseAsian } from './parse-asian.js'

const validMeals = [
    { abbr: "GP", desc: "Garlic Pepper" },
    { abbr: "LT", desc: "Larme du Tigre" },
    { abbr: "LDT", desc: "Larme du Tigre" },
    { abbr: "PTPC", desc: "Pad Thaï Poulet Crunchy" },
    { abbr: "NSB", desc: "Nouilles Au Saté Boeuf" },
    { abbr: "NASC", desc: "Nouilles Au Saté Crevettes" },
    { abbr: "CVC", desc: "Curry Vert Crevettes" },
    { abbr: "FTB", desc: "Fondue Thaï Boeuf" },
    { abbr: "PDM", desc: "Plat Du Moment" },
]

const invalidMeals = [
    "DSF",
    "BSOI",
    "VSS",
    "PTCP",
    "GPC",
    "LDTPC",
    "LTD",
    "CR",
    "PDMMMMMMMMMMM",
    "PTC STP",
    "\n; drop * from users",
    "TRIPLE MONSTRE"
];

test.for(validMeals)("'$abbr' is '$desc'", ({ abbr, desc }) => {
    expect(parseAsian(abbr)).toBe(desc)
});

test.for(invalidMeals)("'%s' is null", (abbr) => {
    expect(parseAsian(abbr)).toBeNull()
});


describe("should be case insensitive", () => {
    test("CRP = crp", () => {
        expect(parseAsian("CRP")).toBe(parseAsian("crp"));
    });
    test("PTPC = ptpc", () => {
        expect(parseAsian("PTPC")).toBe(parseAsian("ptpc"));
    });
    test("PtPc = PTpc", () => {
        expect(parseAsian("PtPc")).toBe(parseAsian("PTpc"));
    });
})
