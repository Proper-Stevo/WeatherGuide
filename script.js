var input = document.querySelector('#inputBtn');
var button = document.querySelector('#searchBtn');



function seachBar(event) {
    event.preventDefault();
    console.log(input.value);
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&current.uvi&appid=76dac667dc0c7f08796594217df02e49&units=imperial';
    fetch(api)
    console.log(api);

    fetch(api)
        .then(function (response) {
            return response.json()


        })
        .then(function (data) {
            console.log(data)
            console.log("tempature: ", data.main.temp)
            console.log("humidity: ", data.main.humidity)
            console.log("name: ", data.name)
            // console.log("UV Index: ", data.current.uvi)
         // storage should go in here, using the "input.value"

            var secondApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly,daily,minutely,alerts&units=imperial&appid=cfe0b2658aec5af16bf8115cfd986eca'
            console.log(secondApi)
            fetch(secondApi)
                .then(function (response) {
                    return response.json()

                })

                .then(function (data) {
                    console.log(data)
                    console.log("UV Index: ", data.current.uvi)

                })
        })
     
}
button.addEventListener('click', seachBar);

