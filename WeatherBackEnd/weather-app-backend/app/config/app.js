// 引入dotenv包，将。env文件中的配置导入到环境变量中
// 通过process.env.变量名来获取配置
const dotenv= require('dotenv');
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV ?? "dev";

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: process.env.prefix ?? "/api/v1",
    },
    openWeatherApiKey: process.env.OPENWEATHER_APIKEY,
}