"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const redisConfig = (0, config_1.registerAs)('redis', () => ({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
    db: parseInt(process.env.REDIS_DB || '0'),
    keyPrefix: process.env.REDIS_KEY_PREFIX,
    maxRetriesPerRequest: parseInt(process.env.REDIS_MAX_RETRIES_PER_REQUEST),
    lazyConnect: true,
    retryStrategy: (times) => Math.min(times * 100, 3000),
    enableReadyCheck: true,
}));
exports.default = redisConfig;
//# sourceMappingURL=redis.config.js.map