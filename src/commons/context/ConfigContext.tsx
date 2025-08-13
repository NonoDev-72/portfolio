import { m } from "framer-motion";
import { createContext, useContext, useState } from "react";


const ConfigContext = createContext({
    notFoundActive: false,
    setNotFoundActive: (active: boolean) => {},
    maintenanceActive: false,
    setMaintenanceActive: (active: boolean) => {}
});

export const ConfigProvider = ({ children }) => {
    const [notFoundActive, setNotFoundActive] = useState(false);
    const [maintenanceActive, setMaintenanceActive] = useState(false);

    return (
        <ConfigContext.Provider value={{ notFoundActive, setNotFoundActive, maintenanceActive, setMaintenanceActive }}>
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