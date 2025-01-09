import {BaseApiService} from "./baseApiService.ts";
import {LoginCredentials, RegisterUserData} from "../interface.ts";

class AuthService extends BaseApiService {
    private authEndpoints = {
        login: `${this.backendURL}/auth/login`,
        logout: `${this.backendURL}/auth/logout`,
        register: `${this.backendURL}/auth/register`,
        checkAuth: `${this.backendURL}/auth/check-auth`,
    };

    login(credentials: LoginCredentials): Promise<unknown> {
        return this._request('POST', this.authEndpoints.login, credentials);
    }

    logout(): Promise<unknown> {
        return this._request('GET', this.authEndpoints.logout);
    }

    register(userData: RegisterUserData): Promise<unknown> {
        return this._request('POST', this.authEndpoints.register, userData);
    }

    isAuthenticated(): Promise<boolean> {
        return this._request<boolean>('GET', this.authEndpoints.checkAuth);
    }
}

const authService = new AuthService();

export default authService;
