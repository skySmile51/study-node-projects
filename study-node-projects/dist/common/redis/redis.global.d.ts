import { RedisService } from './redis.service';
export declare function setGlobalRedis(redis: RedisService): void;
export declare function getGlobalRedis(): RedisService;
export declare abstract class RedisAwareService {
    protected get redis(): RedisService;
}
