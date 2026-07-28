import axios from 'axios';
import { BASE_URL } from '../../constants/Constants';
import store from '../../../store';
import { resetAuthState } from '../../../store/authSlice';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    // Attach the bearer token, unless the request already carries its own auth
    this.instance.interceptors.request.use(
      config => {
        const { token } = store.getState().auth;
        if (token && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error),
    );

    // Sign the user out when the session is no longer valid
    this.instance.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 401) {
          store.dispatch(resetAuthState());
        }
        return Promise.reject(error);
      },
    );
  }

  /**
   * Generic request method that uses the endpoint configuration.
   * @param {Object} endpointConfig - { url, method }
   * @param {Object} data - Request payload (body or params)
   * @param {Object} config - Axios config overrides
   */
  async request(endpointConfig, data = {}, config = {}) {
    const { url, method } = endpointConfig;

    // Detect FormData and set content-type header automatically
    const isFormData = data instanceof FormData;
    const headers = isFormData
      ? { ...config.headers, 'Content-Type': 'multipart/form-data' }
      : config.headers;

    const response = await this.instance.request({
      url,
      method,
      data: method === 'GET' ? undefined : data,
      params: method === 'GET' ? data : undefined,
      ...config,
      headers: {
        ...headers,
      },
    });
    return response.data;
  }
}

export default new Api();
