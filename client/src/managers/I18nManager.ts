import { Optional } from "../types/generics";
import { safe } from "../util";
import { Manager } from "./AssetManager";

const glob: Record<string, () => Promise<any>> = import.meta.glob('../assets/lang/*.json');
console.log(glob);
export class I18nManager extends Manager<Record<string, string>> {
    #dictionaries: Record<string, Record<string, string>> = {};
    #currentLanguage: string = '';
    static #EMPTY: Record<string, string> = {};
    constructor() {
        super();
    }
    async setLanguage(lang: string): Promise<Record<string, string>> {
        const [result]: [Optional<Record<string, string>>, any] = await safe.ly(this.load(lang));
        const prev: string = this.#currentLanguage;
        this.#currentLanguage = lang;
        if (prev !== lang) {
            this.dispatchEvent(new Event('change'));
        }
        return result ?? {};
    }
    get currentLanguage(): string { return this.#currentLanguage; }
    translate(key: string): string {
        return this.#dictionaries[this.#currentLanguage][key];
    }
    destroy(): void {
        this.#dictionaries = {};
    }
    async load(name: string, source?: string): Promise<Record<string, string>> {
        source = source ?? `${name}.json`;
        if (name in this.#dictionaries) {
            return this.#dictionaries[name];
        }
        const result: Record<string, string> = (await glob[`../assets/lang/${source}`]()).default;
        this.#dictionaries[name] = result;
        return result;
    }
    get(lang: string): Record<string, string> {
        return this.#dictionaries[lang];
    }
    remove(lang: string): boolean {
        if (lang in this.#dictionaries) {
            delete this.#dictionaries[lang];
            return true;
        }
        return false;
    }
    removeAsset(lang: string): string[] {
        if (this.remove(lang)) {
            return [lang];
        }
        return [];
    }
    get EMPTY(): Record<string, string> {
        return I18nManager.#EMPTY;
    }
}