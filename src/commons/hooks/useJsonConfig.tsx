import { useMemo, useCallback } from 'react';

function parseIfString(value) {
    try {
        return typeof value === 'string' && value.trim().startsWith('{')
            ? JSON.parse(value)
            : value;
    } catch {
        return value;
    }
}

export function useDeepSearch(response) {
    // 1. Parsear los JSON string
    const data = useMemo(() => ({
        ...response,
        features: parseIfString(response.features),
        endpoints: parseIfString(response.endpoints),
        locales: parseIfString(response.locales),
    }), [response]);

    // 2. Obtener valor por ruta dot/bracket
    const getByPath = useCallback((path) => {
        return path.split('.').reduce((acc, segment) => {
            if (acc === undefined || acc === null) return undefined;

            const arrayMatch = segment.match(/^(.+)\[(\d+)\]$/);
    if (arrayMatch) {
        const [, key, idx] = arrayMatch;
        return acc[key]?.[Number(idx)];
    }
    return acc[segment];
}, data);
  }, [data]);

// 3. Buscar todas las ocurrencias de una clave
const findByKey = useCallback((targetKey: string) => {
    const results: unknown[] = [];
    function recurse(obj: unknown) {
        if (Array.isArray(obj)) {
            obj.forEach(item => recurse(item));
        } else if (obj && typeof obj === 'object') {
            Object.entries(obj as Record<string, unknown>).forEach(([k, v]) => {
                if (k === targetKey) {
                    results.push(v);
                }
                recurse(v);
            });
        }
    }
    recurse(data);
    return results;
}, [data]);

return { getByPath, findByKey, data };
}
