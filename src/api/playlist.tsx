import { request } from '../utils/request'

export const GetPlaylist = (date: string) => request.get(`/list?date=${date}`, {}, { timeout: 15000 });
export const GetSharelink = (timestamp: number) => request.get(`/getsharelink?t=${timestamp}`, { }, { timeout: 15000 });

