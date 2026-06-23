import { expect, test } from 'vitest'
import { parseBurger } from './parse-burger.js'
import { describe } from 'node:test';

const validMeals = [
    { abbr: "DSF", desc: "Dirty Saignant Frites" },
    { abbr: "BSAPS", desc: "Burger Semaine A Point Salade" },
    { abbr: "VVF", desc: "Verano Végé Frites" },
    { abbr: "DAPSBMSF", desc: "Dirty A Point Sans Bacon Mix Salade Frites" },
    { abbr: "VSS", desc: "Verano Saignant Salade" },
    { abbr: "BSSF", desc: "Burger Semaine Saignant Frites" },
    { abbr: "BSVF", desc: "Burger Semaine Végé Frites" },
    { abbr: "DPCFSB", desc: "Dirty Poulet Crunchy Frites Sans Bacon" },
    { abbr: "VSMSF", desc: "Verano Saignant Mix Salade Frites" },
    { abbr: "BPSF", desc: "Black Pepper Saignant Frites" },
]

const invalidMeals = [
    "OPF",
    "BSOI",
    "PTC",
    "OSMSF",
    "DSFSBMSF",
    "BS",
    "DSFAPSB",
    "DSFPCSB",
    "DSFFFFFFFFFFFFFFFFFFFFFFF",
    "DAPFSBMSF",
    "DSFSB STP",
    "\n; drop * from users",
    "crp",
    "TRIPLE MONSTRE",
    "PC",
    "PAC"
];

test.for(validMeals)("'$abbr' is '$desc'", ({ abbr, desc }) => {
    expect(parseBurger(abbr)).toBe(desc)
});

test.for(invalidMeals)("'%s' is null", (abbr) => {
    expect(parseBurger(abbr)).toBeNull()
});


describe("should be case insensitive", () => {
    test("DSF = dsf", () => {
        expect(parseBurger("DSF")).toBe(parseBurger("dsf"));
    });
    test("DSSBMSF = dssbmsf", () => {
        expect(parseBurger("DSSBMSF")).toBe(parseBurger("dssbmsf"));
    });
    test("dSSBmsf = dsSbmSF", () => {
        expect(parseBurger("dSSBmsf")).toBe(parseBurger("dsSbmSF"));
    });
})
