import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Config from 'config';
import { AsyncRequest } from 'shared/types/request';

class HttpClient {
  private request: AxiosInstance;

  constructor(baseurl?: string) {
    const host = Config.getInstance().getApi().host;
    const requestConfig: AxiosRequestConfig = {
      baseURL: host + (baseurl || ''),
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.request = axios.create(requestConfig);
  }

  public get<T>(
    url: string,
    params?: object,
    options?: AxiosRequestConfig
  ): AsyncRequest<T> {
    const config: AxiosRequestConfig = { params, ...options };
    return this.request.get(url, config);
  }

  public post<T>(
    url: string,
    data?: unknown,
    options?: AxiosRequestConfig
  ): AsyncRequest<T> {
    return this.request.post(url, data, options);
  }

  public patch<T>(
    url: string,
    data?: unknown,
    options?: AxiosRequestConfig
  ): AsyncRequest<T> {
    return this.request.patch(url, data, options);
  }

  public del<T>(
    url: string,
    data?: unknown,
    params?: object,
    options?: AxiosRequestConfig
  ): AsyncRequest<T> {
    const config: AxiosRequestConfig = { url, data, params, ...options };
    return this.request.delete(url, config);
  }

  public put<T>(
    url: string,
    data?: unknown,
    params?: object,
    options?: AxiosRequestConfig
  ): AsyncRequest<T> {
    return this.request.put(url, data, { params, ...options });
  }
}

export default HttpClient;
