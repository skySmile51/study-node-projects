import { registerAs, ConfigType } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm'
import { join } from 'path';


const parseTypeOrmLogging = (): DataSourceOptions['logging'] => {
  const raw = process.env.TYPEORM_LOGGING?.trim();

  // 未配置时默认只保留关键日志，避免连接池 session 初始化 SQL 刷屏。
  if (!raw) {
    return ['error', 'warn'];
  }

  if (raw === 'true') return true;
  if (raw === 'false') return false;

  // 支持 TYPEORM_LOGGING=query,error,warn 这种按需配置
  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean) as Exclude<DataSourceOptions['logging'], boolean>;
}

const mysqlConfig = registerAs('mysql', () => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  // synchronize: process.env.NODE_ENV === 'development',
  // logging: process.env.NODE_ENV === 'development',
  logger: parseTypeOrmLogging(),
  timezone: '+08:00',
}));

export type MysqlConfigType = ConfigType<typeof mysqlConfig>;

export default mysqlConfig;