const ipDisplay = document.querySelector(".ip-display")
const locationDisplay = document.querySelector(".location-display")
const regionDisplay = document.querySelector(".region-display")
const countryDisplay = document.querySelector(".country-display")
const timezoneDisplay = document.querySelector(".timezone-display")
let mapDisplay = document.querySelector(".map")

const btn = document.querySelector(".lookup-btn")
let api = `https://ipapi.co/json/`
let ip, locate, region, country, timezone
btn.addEventListener("click", () => {
    //console.log("clicked");
    fetch(api)
        .then(res => res.json())
        .then(data => {
            ip = data.ip
            //console.log(ip);
            ipDisplay.innerHTML = `IP: ${ip}`

            locate = data.city
            //console.log(locate);
            locationDisplay.innerHTML = `Location: ${locate}` 

            region = data.region
            //console.log(region);
            regionDisplay.innerHTML = `Region: ${region}`

            country = data.country_name
            //console.log(country);
            countryDisplay.innerHTML = `Country: ${country}`

            timezone = data.timezone
            //console.log(timezone);
            timezoneDisplay.innerHTML = `Timezone: ${timezone}`
        })
   

})


