export function parseBurger(abbr: string) {
    const burgerMap: Record<string, string> = {
        "C": "Chef",
        "D": "Dirty",
        "BP": "Black Pepper",
        "E": "Estaté",
        "V": "Verano",
        "BS": "Burger Semaine"
    }

    return burgerMap[abbr] ?? "Burger inconnu"
}