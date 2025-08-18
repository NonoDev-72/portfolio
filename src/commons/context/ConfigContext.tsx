import { m } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import CallApiService from "../../service/CallApiService";
import { IoIosLocate } from "react-icons/io";
import { useDeepSearch } from "../hooks/useJsonConfig";
import Constants from "../utils/Constants";


const ConfigContext = createContext({
    notFoundActive: false,
    setNotFoundActive: (active: boolean) => { },
    maintenanceActive: false,
    setMaintenanceActive: (active: boolean) => { },
    isLoading: false,
    setIsLoading: (loading: boolean) => { },
    config: null,
    setConfig: (config: unknown) => { },
    error: false,
    setError: (error: boolean) => { },
});

export const ConfigProvider = ({ children }) => {
    const [notFoundActive, setNotFoundActive] = useState(false);
    const [maintenanceActive, setMaintenanceActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [config, setConfig] = useState<any | null>({});
    const [error, setError] = useState<boolean>(false);
    const callApi = new CallApiService();
    const { getByPath, findByKey, data } = useDeepSearch(config);

    useEffect(() => {
        setIsLoading(true);
        callApi.get('/0f94b0ab-edb6-490c-93c6-b515dd7d762a')
            .then(data => {
                setConfig(data);
            })
            .catch(() => {
                setError(true);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setMaintenanceActive(getByPath(`features.${Constants.VITE_ENV}.development`) ? true : false);
    }, [config])

    return (
        <ConfigContext.Provider value={{ notFoundActive, setNotFoundActive, maintenanceActive, setMaintenanceActive, isLoading, setIsLoading, config, setConfig, error, setError }}>
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