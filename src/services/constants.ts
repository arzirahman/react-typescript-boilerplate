export const BASE_URL = 'http://localhost:5000';
export const LOGIN_URL = '/login';
export const TOKEN_URL = '/token';
export const LOGOUT_URL = '/logout';

export type ResponseType = {
    code?: number;
    status?: string;
    message?: any;
}

export interface AppState {
    accessToken: string;
    loading: boolean;
}