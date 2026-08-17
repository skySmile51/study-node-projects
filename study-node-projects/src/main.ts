import * as dotenv from 'dotenv';
// import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisService } from './common/redis/redis.service';
import { setGlobalRedis } from './common/redis/redis.global';


// 最先加载 env：根据 NODE_ENV 选文件，保证 config.ts 等任何模块读取前 process.env 已就绪
const envFiles =
  process.env.NODE_ENV === 'production'
    ? ['.env.production']
    : process.env.NODE_ENV === 'uat'
      ? ['.env.uat']
      : process.env.NODE_ENV === 'test'
        ? ['.env.test', '.env.development']
        : ['.env.development'];
for (const file of envFiles) {
  dotenv.config({ path: file });
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redisService = app.get(RedisService);
  setGlobalRedis(redisService);
  await app.listen(process.env.SERVER_PORT ?? 3000);
  console.log(`Server is running on port ${process.env.SERVER_PORT ?? 3000}`);
}
bootstrap();
