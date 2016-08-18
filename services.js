// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {

        var weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ee0098e80ea0c24f703c96584f5d6005",
                {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        return weatherAPI.get({
            q: city, cnt: days
        });


    };


}]);