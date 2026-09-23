import { useMemo } from 'react'
import es from '../../assets/i18n/es.json'
import en from '../../assets/i18n/en.json'
import { useLanguage } from '../context/LanguageContext'
import { appManagerClient, useConfig } from '../context/ConfigContext'

const flatten = (value: unknown, prefix = '', out: Record<string, string> = {}) => {
    if (value !== null && typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) flatten(v, prefix ? `${prefix}.${k}` : k, out)
    } else {
        out[prefix] = String(value)
    }
    return out
}

const localLiterals = { es: flatten(es), en: flatten(en) }

export const useTranslation = () => {
    const { language } = useLanguage()
    const { config } = useConfig()

    // Literals come from App Manager (real-time editable). The bundled JSON is
    // only a fallback when the remote config could not be fetched.
    const literals = useMemo<Record<string, string>>(
        () => config ? appManagerClient.getLiterals(config, language) : localLiterals[language],
        [config, language],
    )

    const t = (key: string): string => {
        if (!key || key.trim() === '') return ''
        return literals[key] ?? key
    }

    // Arrays are stored as indexed keys: `key.0`, `key.1`, ...
    const tList = <T = string,>(key: string): T[] => {
        const items: T[] = []
        while (`${key}.${items.length}` in literals) items.push(literals[`${key}.${items.length}`] as T)
        return items
    }

    return { t, tList }
}
