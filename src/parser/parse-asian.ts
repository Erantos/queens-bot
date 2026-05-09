import { dishMap, proteinMap, type AsianDish } from "./const-asian.js";

function extractDish(abbr: string) {
    const keys = Object.keys(dishMap).sort((a, b) => b.length - a.length) as (keyof typeof dishMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k));

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

function extractProtein(abbr: string) {
    const keys = Object.keys(proteinMap).sort((a, b) => b.length - a.length) as (keyof typeof proteinMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k)) ?? "";

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

export function parseAsian(abbr: string) {
    abbr = abbr.toUpperCase();
    const dish = extractDish(abbr);
    if (!dish) return null;

    const dishInfos = dishMap[dish.token] as AsianDish;
    if (!dishInfos.availProt)
        return dish.remaining ? null : dishInfos.name;

    const prot = extractProtein(dish.remaining);
    if (!prot || !dishInfos.availProt.includes(prot.token) || prot.remaining) return null;

    return dishInfos.name + ' ' + proteinMap[prot.token];
}