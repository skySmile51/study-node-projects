"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const parseTypeOrmLogging = () => {
    const raw = process.env.TYPEORM_LOGGING?.trim();
    if (!raw) {
        return ['error', 'warn'];
    }
    if (raw === 'true')
        return true;
    if (raw === 'false')
        return false;
    return raw
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
};
const mysqlConfig = (0, config_1.registerAs)('mysql', () => ({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
    logger: parseTypeOrmLogging(),
    timezone: '+08:00',
}));
exports.default = mysqlConfig;
//# sourceMappingURL=mysql.config.js.map