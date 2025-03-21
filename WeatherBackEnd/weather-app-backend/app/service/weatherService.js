// axios是一个基于promise的HTTP库，可以用在浏览器和node.js中。
// axios的主要特点包括：
// 从浏览器中创建XMLHttpRequest
// 从node.js创建http请求
// 支持Promise API
// 拦截请求和响应
// 转换请求和响应数据
// 取消请求
// 自动转换JSON数据
// 客户端支持防止CSRF
const axios = require('axios');
const app = require("../config/app");

exports.getWeather = () => {
    const lat = 35;
    const lon = 139;
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${app.openWeatherApiKey}`)
}