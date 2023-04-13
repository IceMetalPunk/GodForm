export type EnumType = Readonly<Record<string, symbol>>;
export function makeEnum(...entries: string[]): EnumType {
    const result: Record<string, symbol> = {} as Record<string, symbol>;
    entries.forEach((name: string) => result[name] = Symbol(name));
    return Object.freeze(result);
}

export const TraitType: EnumType = makeEnum('Sink', 'Source', 'Transfer', 'Unknown');