const burgerMap = {
    "C": "Chef",
    "D": "Dirty",
    "BP": "Black Pepper",
    "E": "Estaté",
    "V": "Verano",
    "BS": "Burger Semaine"
}

export function extractBurger(abbr: string) {
    const keys = Object.keys(burgerMap).sort((a, b) => b.length - a.length) as (keyof typeof burgerMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k));

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

const baseMap = {
    "S": "Saignant",
    "AP": "A point",
    "V": "Végé",
    "PC": "Poulet Crunchy"
}

export function extractBase(abbr: string) {
    const keys = Object.keys(baseMap).sort((a, b) => b.length - a.length) as (keyof typeof baseMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k)) ?? "";

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

const optionMap = {
    "S": "Salade",
    "F": "Frites",
    "MSF": "Mix Salade Frites",
    "SB": "Sans Bacon",
    "SJ": "Sans Jambon"
}

export function extractOption(abbr: string) {
    const keys = Object.keys(optionMap).sort((a, b) => b.length - a.length) as (keyof typeof optionMap)[];
    const biggestMatch = keys.find(k => abbr.startsWith(k)) ?? "";

    if (!biggestMatch)
        return null

    return { token: biggestMatch, remaining: abbr.substring(biggestMatch.length) };
}

export function parseBurger(abbr: string) {
    const burger = extractBurger(abbr);
    if (!burger) return null;

    const base = extractBase(burger.remaining);
    if (!base) return null;

    const option1 = extractOption(base.remaining);
    const option2 = option1 ? extractOption(option1.remaining) : null;

    return burgerMap[burger.token] +
        ' ' + baseMap[base.token] +
        (option1 ? ' ' + optionMap[option1.token] : '') +
        (option2 ? ' ' + optionMap[option2.token] : '');

}