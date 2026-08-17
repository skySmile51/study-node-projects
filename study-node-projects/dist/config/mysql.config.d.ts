import { ConfigType } from '@nestjs/config';
declare const mysqlConfig: (() => {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    logger: import("typeorm").LoggerOptions;
    timezone: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    logger: import("typeorm").LoggerOptions;
    timezone: string;
}>;
export type MysqlConfigType = ConfigType<typeof mysqlConfig>;
export default mysqlConfig;
