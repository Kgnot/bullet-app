import {LoginCredentials, RegisterUserData} from "../interface.ts";
import {Wallets} from "../../entities";

class ApiService {
    private backendURL: string ='http://localhost:8080';

    private authEndpoints = {
        login: `${this.backendURL}/auth/login`,
        logout: `${this.backendURL}/auth/logout`,
        register: `${this.backendURL}/auth/register`,
        checkAuth: `${this.backendURL}/auth/check-auth`,
    };

    private userEndpoints = {
        wallets: `${this.backendURL}/wallets`,
        expenses: `${this.backendURL}/expenses`,
    };

    // Para saber si es autenticado:
    async isAuthenticated(): Promise<boolean> {
        return await this._request<boolean>('GET', this.authEndpoints.checkAuth);
    }
    // Login
    login(credentials: LoginCredentials): Promise<unknown> {
        return this._request('POST', this.authEndpoints.login, credentials);
    }
    logout():Promise<unknown>{
        return this._request('GET',this.authEndpoints.logout);
    }
    // Register
    register(userData: RegisterUserData): Promise<unknown> {
        return this._request('POST', this.authEndpoints.register, userData);
    }
    // Wallets (requieren autenticación)
    walletsUser(): Promise<Wallets[]> {
        return this._request('GET', this.userEndpoints.wallets);
    }
    expensesUser(authData: { expense: string }): Promise<unknown> {
        return this._request('GET', this.userEndpoints.expenses, authData);
    }





    // Request genérico
    private async _request<T>(method: string, url: string, data: unknown = null): Promise<T> {
        const headers = {
            'Content-Type': 'application/json',
        };

        const options: RequestInit = {
            method,
            headers,
            body: data ? JSON.stringify(data) : null,
            credentials: 'include', // Importante para las cookies
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('No autenticado. Redirigiendo al login...');
                }
                throw new Error(`Error en la petición: ${response.statusText}`);
            }

            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                return {} as T; //retornamos algo generico
            }
        } catch (error) {
            console.error('Error al realizar la petición:', error);
            throw error;
        }
    }
}


const apiService = new ApiService();
export default apiService;
