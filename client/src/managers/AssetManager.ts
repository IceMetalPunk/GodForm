export abstract class Manager<T> extends EventTarget {
    abstract destroy(): void;
    abstract load<V extends string>(name: string, source: V): T | Promise<T>;
    abstract get(name: string): T;
    abstract remove(name: string): boolean;
    abstract removeAsset(name: string): string[];
    abstract get EMPTY(): T;
}