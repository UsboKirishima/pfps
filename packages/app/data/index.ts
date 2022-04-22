import Redis from 'ioredis';

export const redis = new Redis();

export const fetchAllPfps = async (): Promise<void | any> => {
    return redis.get(`pfps`);
}