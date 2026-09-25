const API= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const APIURl ="d6ba445243766033399df693f1239734";

async function chkWeather(city) {
    const response = await fetch(API + city +`&appid=${APIURl}`);
    const data = await response.json();
    const icn = document.querySelector(".weathericon");
   document.querySelector(".cityname").innerHTML= data.name;
   document.querySelector(".weathertemp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humiditytemp").innerHTML= data.main.humidity+"%";
    document.querySelector(".windtemp").innerHTML= data.wind.speed+"km/h";
  console.log(data);
  if(data.weather[0].main =="Clouds"){
   icn.src ="clouds.svg";
  }

}

const serchinp = document.querySelector(".search input");
const btn = document.querySelector(".search button");
 
btn.addEventListener("click" ,function(){
   chkWeather(serchinp.value);
   serchinp.value="";
   
});


