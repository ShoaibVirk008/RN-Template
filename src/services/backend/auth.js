import { END_POINTS } from "../constants/Constants";
import Api from "../../utilities/api/Api";

const BASIC_AUTH = 'Basic c2VydmVyOjdtYGU1U056ey9kLi4mZSg5RSpqR1EhTCI+UU1tVzteOHQ5cnpOakgkUzBEYUVRPjt9';

/**
 * Service for handling all authentication-related API calls.
 */
class AuthService {
    /**
     * Logs in a user.
     * @param {Object} credentials - User email, password and device info.
     * @returns {Promise<Object>} API response data.
     */
    async login({ email, password, ...deviceInfo }) {
        const data = { email, password, ...deviceInfo };
        const endpoint = END_POINTS.login;

        __DEV__ && console.log('AuthService.login \n\n url: ', endpoint.url, '\n\n data: ', data);

        try {
            return await Api.request(endpoint, data, {
                headers: { 'Authorization': BASIC_AUTH }
            });
        } catch (error) {
            __DEV__ && console.log('AuthService.login error: ', error);
            throw error;
        }
    }

    /**
     * Registers a new user.
     * @param {Object} userData - User registration details including device info.
     * @returns {Promise<Object>} API response data.
     */
    async register({ email, password, full_name, username, referral_code = '', ...deviceInfo }) {
        const data = { email, password, full_name, username, referral_code, ...deviceInfo };
        const endpoint = END_POINTS.register;

        __DEV__ && console.log('AuthService.register \n\n url: ', endpoint.url, '\n\n data: ', data);

        try {
            return await Api.request(endpoint, data, {
                headers: { 'Authorization': BASIC_AUTH }
            });
        } catch (error) {
            __DEV__ && console.log('AuthService.register error: ', error);
            throw error;
        }
    }

    /**
     * Logs out the current user.
     * @returns {Promise<Object>} API response data.
     */
    async logout() {
        const endpoint = END_POINTS.logout;

        __DEV__ && console.log('AuthService.logout \n\n url: ', endpoint.url);

        try {
            return await Api.request(endpoint);
        } catch (error) {
            __DEV__ && console.log('AuthService.logout error: ', error);
            throw error;
        }
    }
}

export default new AuthService();
