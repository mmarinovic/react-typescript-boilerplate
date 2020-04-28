import { AxiosPromise } from 'axios';

export type AsyncRequest<T> = AxiosPromise<T>;
