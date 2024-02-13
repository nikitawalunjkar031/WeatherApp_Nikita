async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e1344f4e0fdbd2d24ac8711cfe16c40`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}
//demo()

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if(cityName===""){
		alert("Enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
	
}