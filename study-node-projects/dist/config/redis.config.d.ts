import { ConfigType } from '@nestjs/config';
import { RedisOptions } from 'ioredis';
declare const redisConfig: (() => RedisOptions) & import("@nestjs/config").ConfigFactoryKeyHost<RedisOptions>;
export type RedisConfigType = ConfigType<typeof redisConfig>;
export default redisConfig;
