import { expect, test } from 'vitest'
import { parseBurger } from './parse.js'

const validMeals = [
    { abbr: "DSF", desc: "Dirty Saignant Frites" },
    { abbr: "BSAPS", desc: "Burger Semaine A point Salade" },
    { abbr: "VVF", desc: "Verano Végé Frites" },
    { abbr: "DAPSBMSF", desc: "Dirty A point Sans Bacon Mix Salade Frites" },
]

const invalidMeals = [
    "OPF",
    "BSOI",
    "PTC",
    "OSMSF"
];

test.for(validMeals)("'$abbr' is '$desc'", ({ abbr, desc }) => {
    expect(parseBurger(abbr)).toBe(desc)
})

test.for(invalidMeals)("'%s' is null", (abbr) => {
    expect(parseBurger(abbr)).toBeNull()
})