import Redis from 'ioredis';

class RedisSingleton {
    static instance: RedisSingleton | null = null;
    client: Redis;

    constructor() {
        if (RedisSingleton.instance) {
            return RedisSingleton.instance;
        }

        this.client = new Redis({
            host: process.env.REDIS_HOST || 'localhost',
            port: parseInt(process.env.REDIS_PORT as string) || 6379,
        });
        RedisSingleton.instance = this;
    }

    static getInstance() {
        if (!RedisSingleton.instance) {
            RedisSingleton.instance = new RedisSingleton();
        }
        return RedisSingleton.instance.client;
    }
}

export default RedisSingleton;