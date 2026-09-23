import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AppManagerClient, AppManagerConfig } from "@expozcode/app-manager-sdk";
import Constants from "../utils/Constants";

export const appManagerClient = new AppManagerClient({
    baseUrl: Constants.APP_MANAGER_BASE_URL,
    token: Constants.APP_MANAGER_TOKEN,
    environment: Constants.VITE_ENV,
});

export type Project = {
    id: string;
    category: string;
    title: string;
    description: string;
    image?: string;
    link?: string;
    stack?: string[];
    featured?: boolean;
    order?: number;
};

export const getProjects = (config: AppManagerConfig | null): Project[] => {
    if (!config) return [];
    const projects = appManagerClient.getJSON<Project[]>(config, 'projects', []);
    return [...projects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};

export type Stat = {
    value: number;
    labelKey: string;
    suffix?: string;
};

const DEFAULT_STATS: Stat[] = [
    { value: 5, labelKey: 'stats.years', suffix: '+' },
    { value: 3, labelKey: 'stats.orgs' },
    { value: 17, labelKey: 'stats.tech' },
    { value: 2, labelKey: 'stats.platforms' },
];

// `stats` config key: [{ "value": 5, "suffix": "+", "labelKey": "stats.years" }, ...]. Falls back to the defaults if absent.
export const getStats = (config: AppManagerConfig | null): Stat[] => {
    if (!config) return DEFAULT_STATS;
    const stats = appManagerClient.getJSON<Stat[]>(config, 'stats', DEFAULT_STATS);
    return Array.isArray(stats) && stats.length ? stats : DEFAULT_STATS;
};

const ConfigContext = createContext({
    appManagerClient: appManagerClient,
    isBlocked: (_section: string): boolean => false,
    notFoundActive: false,
    setNotFoundActive: (active: boolean) => { },
    maintenanceActive: false,
    setMaintenanceActive: (active: boolean) => { },
    isLoading: false,
    setIsLoading: (loading: boolean) => { },
    config: null as AppManagerConfig | null,
    setConfig: (config: AppManagerConfig | null) => { },
    error: false,
    setError: (error: boolean) => { },
});

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
    const [notFoundActive, setNotFoundActive] = useState(false);
    const [maintenanceActive, setMaintenanceActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [config, setConfig] = useState<AppManagerConfig | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        appManagerClient.fetchConfig()
            .then(remoteConfig => {
                setConfig(remoteConfig);
                setMaintenanceActive(appManagerClient.isBlocked(remoteConfig, 'maintenance'));
            })
            .catch(() => {
                setError(true);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);

    // A section with no flag (or no config yet) is not blocked.
    const isBlocked = (section: string) => config ? appManagerClient.isBlocked(config, section) : false;

    return (
        <ConfigContext.Provider value={{ appManagerClient, isBlocked, notFoundActive, setNotFoundActive, maintenanceActive, setMaintenanceActive, isLoading, setIsLoading, config, setConfig, error, setError }}>
            {children}
        </ConfigContext.Provider>
    );
}

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("useConfig must be used within a ConfigProvider");
    }
    return context;
}
