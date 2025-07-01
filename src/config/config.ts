import dotenv from 'dotenv'

dotenv.config();

export const DEVELOPMENT: boolean = process.env.NODE_ENV === 'development';
export const TEST: boolean = process.env.NODE_ENV === 'test';

export const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345;

export const API_TIME_LIMIT: number = 10 * 60 * 1000; // 10 mins
export const API_REQUEST_COUNT_LIMIT: number = 100;