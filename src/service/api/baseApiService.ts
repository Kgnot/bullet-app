
export class BaseApiService {
    protected backendURL: string = 'http://localhost:8080';

    protected async _request<T>(method: string, url: string, data: unknown = null): Promise<T> {
        const headers = {
            'Content-Type': 'application/json',
        };

        const options: RequestInit = {
            method,
            headers,
            body: data ? JSON.stringify(data) : null,
            credentials: 'include',
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
                return {} as T;
            }
        } catch (error) {
            console.error('Error al realizar la petición:', error);
            throw error;
        }
    }
}
