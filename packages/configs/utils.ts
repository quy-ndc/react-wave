export function flatten(obj: Record<string, any>, prefix = ""): Record<string, any> {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        const p = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && !Array.isArray(value)) {
            Object.assign(acc, flatten(value, p));
        } else {
            acc[p] = value;
        }
        return acc;
    }, {} as Record<string, any>);
}

export function toMap(obj: Record<string, any>): Map<string, any> {
    return new Map(Object.entries(obj));
}
