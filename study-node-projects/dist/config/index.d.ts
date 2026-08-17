declare const serviceConfig: {
    mysql: (() => {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        entities: string[];
        logger: import("typeorm").LoggerOptions;
        timezone: string;
    }) & import("@nestjs/config").ConfigFactoryKeyHost<{
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        entities: string[];
        logger: import("typeorm").LoggerOptions;
        timezone: string;
    }>;
    redis: (() => import("ioredis").RedisOptions) & import("@nestjs/config").ConfigFactoryKeyHost<import("ioredis").RedisOptions>;
};
export default serviceConfig;
