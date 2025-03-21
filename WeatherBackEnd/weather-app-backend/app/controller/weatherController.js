const weatherServices= require("../service/weatherService");

exports.index = async (req, res) => {
    const result = await weatherServices.getWeather();
    console.log(result.data);
    res.send(result.data.list);
}