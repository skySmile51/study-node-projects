import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisConfigType } from '@/config/redis.config';
import { REDIS_CLIENT } from './redis.constants';
import { RedisService } from './redis.service';
import Redis from 'ioredis';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: (configService: ConfigService) => {
        const redisConfig = configService.get<RedisConfigType>('redis');
        const client = new Redis(redisConfig);
        client.on('ready', () => {
          console.log('Redis client connected');
        });
        client.on('error', (err) => {
          console.error('Redis error', err);
        });
        return client;
      },
      inject: [ConfigService]
    },
    RedisService
  ],
  exports: [REDIS_CLIENT, RedisService],

})
export class RedisModule { }