import { registerAs, ConfigType } from '@nestjs/config';
import { RedisOptions } from 'ioredis';

const redisConfig = registerAs('redis', (): RedisOptions => ({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  db: parseInt(process.env.REDIS_DB || '0'),
  // 键前缀
  keyPrefix: process.env.REDIS_KEY_PREFIX,
  // 最大重试次数
  maxRetriesPerRequest: parseInt(process.env.REDIS_MAX_RETRIES_PER_REQUEST),
  // 懒连接
  lazyConnect: true,
  // 重试延迟
  retryStrategy: (times) => Math.min(times * 100, 3000),
  // 启用就绪检查
  enableReadyCheck: true,
}));

export type RedisConfigType = ConfigType<typeof redisConfig>;

export default redisConfig;