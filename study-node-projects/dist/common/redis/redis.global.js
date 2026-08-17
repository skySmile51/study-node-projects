"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisAwareService = void 0;
exports.setGlobalRedis = setGlobalRedis;
exports.getGlobalRedis = getGlobalRedis;
let instance = null;
function setGlobalRedis(redis) {
    instance = redis;
}
function getGlobalRedis() {
    if (!instance) {
        throw new Error('Redis 未初始化，请确保在 main.ts bootstrap 中已调用 setGlobalRedis(app.get(RedisService))');
    }
    return instance;
}
class RedisAwareService {
    get redis() {
        return getGlobalRedis();
    }
}
exports.RedisAwareService = RedisAwareService;
//# sourceMappingURL=redis.global.js.map