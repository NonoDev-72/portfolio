import es from '../../assets/i18n/es.json'
import en from '../../assets/i18n/en.json'
import { useLanguage } from '../context/LanguageContext'

type Translations = typeof es

export const useTranslation = () => {
    const { language } = useLanguage()
    const dictionary: Translations = language === 'es' ? es : en

    const t = (key: string): string => {
        if (!key || key.trim() === '') return ""
        const keys = key.split('.')
        let result: any = dictionary

        for (const k of keys) {
            result = result?.[k]
            if (result === undefined) return key
        }

        return result
    }

    return { t }
}