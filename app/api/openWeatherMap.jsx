var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=538129f35149873b6317b9a980027b8b&units=imperial'

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message)  {
        throw new Error("City not found!");
      } else {
        return (res.data.main.temp);
      }
    }, function(res){
      throw new Error("City not found!");
    })
  }
};