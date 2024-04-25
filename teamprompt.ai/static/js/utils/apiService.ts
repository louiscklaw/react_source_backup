import type { FetchEventSourceInit } from '@microsoft/fetch-event-source';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { DOMAIN } from 'config';

class ApiService {
    private axiosInstance: AxiosInstance;
    private baseURL: string;

    constructor({ baseURL }) {
        this.baseURL = baseURL;
        this.axiosInstance = axios.create({
            baseURL
        });

        this.axiosInstance.interceptors.request.use(async (request) => {
            try {
                const token = window.localStorage.getItem('token');
                if (token) request.headers['Authorization'] = `Bearer ${token}`;
                return request;
            } catch (e) {
                console.error(e);
                return Promise.reject(e);
            }
        });
    }

    public async get<T>(url: string, params?: any): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.get(url, { params });
        return response.data;
    }

    public async post<T>(url: string, data?: any): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
        return response.data;
    }

    public async put<T>(url: string, data?: any): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.put(url, data);
        return response.data;
    }

    public async delete<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.delete(url);
        return response.data;
    }

    public async fetchSSE(
        url: string,
        data?: any,
        opts?: Pick<FetchEventSourceInit, 'onmessage' | 'onopen' | 'onclose' | 'onerror'>
    ): Promise<void> {
        const token = window.localStorage.getItem('token');
        fetchEventSource(`${this.baseURL}${url}`, {
            openWhenHidden: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data),
            onmessage: opts?.onmessage,
            onopen: opts?.onopen,
            onclose: opts?.onclose,
            onerror: opts?.onerror
        });
    }
}

const apiService = new ApiService({ baseURL: DOMAIN });

export default apiService;
