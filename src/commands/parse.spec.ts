import { describe, expect, test } from 'vitest'
import { parseBurger } from './parse.js'


const validBurger = [
    { abbr: "C", desc: "Chef" },
    { abbr: "D", desc: "Dirty" },
    { abbr: "BP", desc: "Black Pepper" },
    { abbr: "E", desc: "Estaté" },
    { abbr: "V", desc: "Verano" },
    { abbr: "BS", desc: "Burger Semaine" },
]

describe("Parse burger names", () => {
    test.for(validBurger)("$abbr means $desc", ({ abbr, desc }) => {
        expect(parseBurger(abbr)).toBe(desc);
    })

    test('Fail on unknown burger', () => {
        expect(parseBurger("DF")).toBe("Burger inconnu");
        expect(parseBurger("HG")).toBe("Burger inconnu");
        expect(parseBurger("A")).toBe("Burger inconnu");
    })
})