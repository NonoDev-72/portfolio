// Add this type definition at the top of your file or in a global .d.ts file
interface ImportMetaEnv {
    VITE_ENV: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}

class Constants {
    static VITE_ENV = import.meta.env.VITE_ENV || 'pre';
}

export default Constants;