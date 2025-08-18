import axios, { AxiosInstance } from 'axios';

export enum TypeCall {
    INTERNAL = 'INTERNAL',
    EXTERNAL = 'EXTERNAL'
}

class CallApiService {
    
    private api: AxiosInstance;
    private baseUrl: string = 'https://pro.api.management.jabedmar.com/api/external/app/config'; // Cambia esto a tu URL base de la API

    constructor() {
        this.api = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    }

    /**
     * Realiza una petición GET.
     * @param endpoint El endpoint específico de la API (ej: '/users/1').
     * @returns Una promesa que se resuelve con los datos de la respuesta.
     */
    public async get<T>(endpoint: string, mapper?: (data: any) => T): Promise<T> {
        try {
            const response = await this.api.get<T>(endpoint);
            return mapper ? mapper(response.data) : response.data;
        } catch (error) {
            console.error('Error en la petición GET:', error);
            throw error;
        }
    }
}

export default CallApiService;