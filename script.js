const apiKey="ca9dcea499121a682c298c741edb246c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const icons=document.querySelector(".clouds")
const weatherInf=document.querySelector(".textInfo");
const searchMsg=document.querySelector(".searchMsg");
const weather=document.querySelector(".weather-info")



async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humid").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

     if(data.weather[0].main=="Clouds"){
        icons.src="icon/cloudy.png";
     }
     else if(data.weather[0].main=="Clouds"){
            icons.src="icon/cloudy.png";
     }
     else if(data.weather[0].main=="Clear"){
            icons.src="icon/sunny.png";
     }
     else if(data.weather[0].main=="Rain"){
            icons.src="icon/raining.png";
     }
     else if(data.weather[0].main=="Drizzle"){
        icons.src="icon/drizzle.png";
     }
     else if(data.weather[0].main=="Haze"){
        icons.src="icon/mist.png";
     }
     else if(data.weather[0].main=="Snow"){
        icons.src="icon/snow.png";
     }

     weatherInf.innerHTML=data.weather[0].main;
 


  if(data.cod == 200){
    weather.style.display="block";
    searchMsg.style.display="none";
  }

}    
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


