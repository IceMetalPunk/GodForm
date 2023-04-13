export const safe = Object.freeze({
    ly: <T>(prom: Promise<T>): Promise<[T, null] | [null, any]> => prom.then((res: T): [T, null] => [res, null]).catch((er: any): [null, any] => [null, er])
});