import { baseMap, burgerMap, optionMap } from "./const-burger.js";

function extractBurger(abbr: string) {
    const keys = Object.keys(burgerMap).sort((a, b) => b.length - a.length) as (keyof typeof burgerMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k));

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

function extractBase(abbr: string) {
    const keys = Object.keys(baseMap).sort((a, b) => b.length - a.length) as (keyof typeof baseMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k)) ?? "";

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

function extractOption(abbr: string) {
    const keys = Object.keys(optionMap).sort((a, b) => b.length - a.length) as (keyof typeof optionMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k)) ?? "";

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

export function parseBurger(abbr: string) {
    abbr = abbr.toUpperCase();
    const burger = extractBurger(abbr);
    if (!burger) return null;

    const base = extractBase(burger.remaining);
    if (!base) return null;

    let finalOrder = burgerMap[burger.token] + ' ' + baseMap[base.token]
    if (!base.remaining)
        return finalOrder;

    const option1 = extractOption(base.remaining);
    if (!option1) return null;

    finalOrder += ' ' + optionMap[option1.token];
    if (!option1.remaining)
        return finalOrder;

    const option2 = extractOption(option1.remaining);
    if (!option2 || option2.remaining) return null;

    finalOrder += ' ' + optionMap[option2.token];
    return finalOrder;
}