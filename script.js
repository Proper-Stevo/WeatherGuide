var input = document.querySelector('#inputBtn');
var button = document.querySelector('#searchBtn');
var displayOne = document.querySelector('.firstInput');
var displayTwo = document.querySelector('.fiveDayInput');



function seachBar(event) {
    event.preventDefault();
    console.log(input.value);
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=imperial&appid=a92be1494d3c0baec600da80d7ff753c';
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
            var nombre = document.createElement("h2")
            nombre.textContent = "Location: " + data.name
            displayOne.appendChild(nombre)
            var hum = document.createElement("h4")
            hum.textContent = "Humidity: " + data.main.humidity
            displayOne.appendChild(hum)
            var temp = document.createElement("h4")
            temp.textContent = "Tempature: " + data.main.temp
            displayOne.appendChild(temp)
            
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
                    var uv = document.createElement("h4")
                    temp.textContent = "UV Index: " + data.current.uvi
                    displayOne.appendChild(uv)

                    // take out all information to display

                })
        })
     
}
button.addEventListener('click', seachBar);

