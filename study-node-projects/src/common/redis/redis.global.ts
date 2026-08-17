/**
 * 全局 Redis 访问
 *
 * 在 main.ts 中 bootstrap 后调用 setGlobalRedis(redis) 注册一次，
 * 任意 Service 继承 RedisAwareService 即可直接使用 this.redis，无需在构造函数中注入。
 */
import { RedisService } from './redis.service';

let instance: RedisService | null = null;

/** 应用启动时由 main 调用，注册全局 RedisService 实例 */
export function setGlobalRedis(redis: RedisService): void {
  instance = redis;
}

/** 获取全局 RedisService，未初始化时抛错 */
export function getGlobalRedis(): RedisService {
  if (!instance) {
    throw new Error('Redis 未初始化，请确保在 main.ts bootstrap 中已调用 setGlobalRedis(app.get(RedisService))');
  }
  return instance;
}

/**
 * 继承此类的 Service 可直接使用 this.redis，无需在构造函数中注入 RedisService。
 *
 * @example
 * export class AuthService extends RedisAwareService {
 *   async someMethod() {
 *     await this.redis.set('key', 'value', 60);
 *   }
 * }
 */
export abstract class RedisAwareService {
  protected get redis(): RedisService {
    return getGlobalRedis();
  }
}
