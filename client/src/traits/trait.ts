import { TraitType } from "../constants/Constants";
import { Optional } from "../types/generics";
type TraitProcessigData = Readonly<Record<string, any>>;
export abstract class Trait {
    #name: string;
    #type: symbol;
    constructor(type: symbol, name: string = '') {
        this.#name = name;
        this.#type = type;
    }
    get name(): string { return this.#name; }
    get type(): symbol { return this.#type; }
    setName(name: string): Trait {
        this.#name = name;
        return this;
    }
    setType(type: symbol): Trait {
        this.#type = type;
        return this;
    }
    abstract process(data: TraitProcessigData): boolean;
}

export class TraitContainer {
    #traits: Map<symbol, Trait> = new Map<symbol, Trait>();
    addTrait(trait: Trait, type: symbol = TraitType.Unknown): TraitContainer {
        this.#traits.set(type, trait);
        return this;
    }
    hasTrait(type: symbol): boolean { return this.#traits.has(type); }
    getTrait(type: symbol = TraitType.Unknown): Optional<Trait> {
        return this.#traits.get(type) ?? null;
    }
}