var input = document.querySelector('#inputBtn');
var button = document.querySelector('#searchBtn');
var displayOne = document.querySelector('#firstInput');
var displayTwo = document.querySelector('#fiveDayInput');
var displayThree = document.querySelector('#second');
var displayFour = document.querySelector('#third');
var displayFive = document.querySelector('#fourth');
var displaySix = document.querySelector('#fifth');




function seachBar(event) {
    event.preventDefault();
    console.log(input.value);
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=imperial&appid=a92be1494d3c0baec600da80d7ff753c';
    fetch(api)
    console.log(api);
    // var icons = 'http://openweathermap.org/img/wn/10d@2x.png'

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
            var temp = document.createElement("h4")
            temp.textContent = "Temperature: " + data.main.temp + data.weather[0].icon
            displayOne.appendChild(temp)
            var hum = document.createElement("h4")
            hum.textContent = "Humidity: " + data.main.humidity
            displayOne.appendChild(hum)
            
            
            
         // storage should go in here, using the "input.value"

            var secondApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly,minutely,alerts&units=imperial&appid=cfe0b2658aec5af16bf8115cfd986eca'
            console.log(secondApi)
            fetch(secondApi)
                .then(function (response) {
                    return response.json()

                })

                .then(function (data) {
                    console.log(data)
                    console.log("UV Index: ", data.current.uvi)
                    var uv = document.createElement("h4")
                    uv.textContent = "UV Index: " + data.current.uvi
                    displayOne.appendChild(uv)

                    // take out all information to display
                    var firstDay = document.createElement("h3")
                    firstDay.textContent = "Temperature: " + data.daily[0].temp.max 
                    displayTwo.appendChild(firstDay)
                    var secondDay = document.createElement("h3")
                    secondDay.textContent = "Temperature: " + data.daily[1].temp.max
                    displayThree.appendChild(secondDay)
                    var thirdDay = document.createElement("h3")
                    thirdDay.textContent = "Temperature: " + data.daily[2].temp.max 
                    displayFour.appendChild(thirdDay)
                    var fourthDay = document.createElement("h3")
                    fourthDay.textContent = "Temperature: " + data.daily[3].temp.max 
                    displayFive.appendChild(fourthDay)
                    var fifthDay = document.createElement("h3")
                    fifthDay.textContent = "Temperature: " + data.daily[4].temp.max 
                    displaySix.appendChild(fifthDay)
                })
        })
     
}
button.addEventListener('click', seachBar);

