import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextProps {
    language: Language
    toggleLanguage: () => void
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('es')

    useEffect(() => {
        const stored = localStorage.getItem('lang') as Language
        if (stored) setLanguageState(stored)
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('lang', lang)
    }

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es')
        document.documentElement.lang = language === 'es' ? 'en' : 'es'
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within LanguageProvider')
    return context
}
