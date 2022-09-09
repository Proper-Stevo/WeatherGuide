var input = document.querySelector('#inputBtn');
var button = document.querySelector('#searchBtn');
var displayOne = document.querySelector('#firstInput');
var displayTwo = document.querySelector('#fiveDayInput');
var displayThree = document.querySelector('#second');
var displayFour = document.querySelector('#third');
var displayFive = document.querySelector('#fourth');
var displaySix = document.querySelector('#fifth');
var date = moment().format("MMM Do YY");


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
            let icon = document.getElementById('icon').src =`http://openweathermap.org/img/w/` + data.weather[0].icon + `.png`;
            displayOne.appendChild(nombre)
            var temp = document.createElement("h4")
            temp.textContent = "Temperature: " + data.main.temp 
            displayOne.appendChild(temp)
            var hum = document.createElement("h4")
            hum.textContent = "Humidity: " + data.main.humidity + "%"
            displayOne.appendChild(hum)
            

            let myPastCities = JSON.parse(localStorage.getItem(input.value));
            localStorage.setItem(input.value, myPastCities);
            
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
                    let icon2 = document.getElementById('icon2').src =`http://openweathermap.org/img/w/` + data.daily[0].weather[0].icon + `.png`;
                    var firstDay = document.createElement("h3")
                    firstDay.textContent = date + '\n' + "Temp: " + data.daily[0].temp.max + " \n Humidity: " + data.daily[0].humidity + "%"
                    displayTwo.appendChild(firstDay)
                    let icon3 = document.getElementById('icon3').src =`http://openweathermap.org/img/w/` + data.daily[1].weather[0].icon + `.png`;
                    var secondDay = document.createElement("h3")
                    secondDay.textContent = date + '\n' + "Temp:" + data.daily[1].temp.max  + "\n Humidity:" + data.daily[1].humidity + "%"
                    displayThree.appendChild(secondDay)
                    let icon4 = document.getElementById('icon4').src =`http://openweathermap.org/img/w/` + data.daily[2].weather[0].icon + `.png`;
                    var thirdDay = document.createElement("h3")
                    thirdDay.textContent = date + '\n' + "Temp:" + data.daily[2].temp.max  + "\n Humidity:" + data.daily[2].humidity + "%"
                    displayFour.appendChild(thirdDay)
                    let icon5 = document.getElementById('icon5').src =`http://openweathermap.org/img/w/` + data.daily[3].weather[0].icon + `.png`;
                    var fourthDay = document.createElement("h3")
                    fourthDay.textContent = date + '\n' + "Temp:" + data.daily[3].temp.max  + "\n Humidity:" + data.daily[3].humidity + "%"
                    displayFive.appendChild(fourthDay)
                    let icon6 = document.getElementById('icon6').src =`http://openweathermap.org/img/w/` + data.daily[4].weather[0].icon + `.png`;
                    var fifthDay = document.createElement("h3")
                    fifthDay.textContent = date + '\n' + "Temp:" + data.daily[4].temp.max  + "\n Humidity:" + data.daily[4].humidity + "%"
                    displaySix.appendChild(fifthDay)
                })
        })
     
}
button.addEventListener('click', seachBar);

