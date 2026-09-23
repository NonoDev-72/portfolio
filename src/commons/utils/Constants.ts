// Add this type definition at the top of your file or in a global .d.ts file
interface ImportMetaEnv {
    VITE_ENV: string;
    VITE_APP_MANAGER_BASE_URL: string;
    VITE_APP_MANAGER_TOKEN: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}

class Constants {
    static VITE_ENV = import.meta.env.VITE_ENV || '';
    static APP_MANAGER_BASE_URL = import.meta.env.VITE_APP_MANAGER_BASE_URL || "";
    static APP_MANAGER_TOKEN = import.meta.env.VITE_APP_MANAGER_TOKEN || '';
}

export default Constants;