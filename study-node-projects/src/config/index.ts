import mysqlConfig from './mysql.config';
import redisConfig from './redis.config';

const serviceConfig = {
  mysql: mysqlConfig,
  redis: redisConfig,
}
export default serviceConfig;