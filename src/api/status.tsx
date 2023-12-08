import { request } from '../utils/request'

export const Ping = () => request.get(`/ping`, {}, { timeout: 15000 });
