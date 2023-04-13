import { Texture, TextureSource } from 'pixi.js';
import { Manager } from './AssetManager';

export default class TextureManager extends Manager<Texture> {
    #textures: Map<string, Texture>;
    #sources: Map<TextureSource, Texture>;
    constructor() {
        super();
        this.#textures = new Map<string, Texture>();
        this.#sources = new Map<TextureSource, Texture>();
    }
    get EMPTY() { return Texture.EMPTY; }
    destroy(): void {
        for (let tex of this.#sources.values()) {
            tex.destroy();
        }
        this.#textures.clear();
        this.#sources.clear();
    }
    load(name: string, source: TextureSource): Texture {
        if (this.#textures.has(name)) {
            return this.#textures.get(name)!;
        }
        const tex: Texture = this.#sources.get(source) ?? Texture.from(source);
        this.#textures.set(name, tex);
        return tex;
    }
    get(name: string): Texture {
        return this.#textures.get(name) ?? Texture.EMPTY;
    }
    remove(name: string): boolean {
        if (this.#textures.has(name)) {
            this.#textures.delete(name);
            return true;
        }
        return false;
    }
    removeAsset(name: string): string[] {
        if (this.#textures.has(name)) {
            const existing: Texture = this.#textures.get(name)!;
            const result: string[] = [...this.#textures.entries()]
                .filter(([, tex]: [string, Texture]) => tex === existing)
                .map(([name,]: [string, Texture]) => {
                    this.#textures.delete(name);
                    return name;
                });
            existing.destroy();
            return result;
        }
        return [];
    }
}