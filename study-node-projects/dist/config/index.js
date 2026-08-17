"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_config_1 = __importDefault(require("./mysql.config"));
const redis_config_1 = __importDefault(require("./redis.config"));
const serviceConfig = {
    mysql: mysql_config_1.default,
    redis: redis_config_1.default,
};
exports.default = serviceConfig;
//# sourceMappingURL=index.js.map