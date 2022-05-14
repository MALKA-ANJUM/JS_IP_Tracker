const ipDisplay = document.querySelector(".ip-display")
const locationDisplay = document.querySelector(".location-display")
const regionDisplay = document.querySelector(".region-display")
const countryDisplay = document.querySelector(".country-display")
const timezoneDisplay = document.querySelector(".timezone-display")
const currencyDisplay = document.querySelector(".currency-display")

const btn = document.querySelector(".lookup-btn")
let api = `https://ipapi.co/json/`
let ip, locate, region, country, timezone, currency
btn.addEventListener("click", () => {
    //console.log("clicked");
    fetch(api)
        .then(res => res.json())
        .then(data => {
            ip = data.ip
            console.log(ip);
            ipDisplay.innerHTML = ip

            locate = data.city
            console.log(locate);
            locationDisplay.innerHTML = locate

            region = data.region
            console.log(region);
            regionDisplay.innerHTML = region

            country = data.country_name
            console.log(country);
            countryDisplay.innerHTML = country

            timezone = data.timezone
            console.log(timezone);
            timezoneDisplay.innerHTML = timezone

            currency = data.currency
            console.log(currency);
            currencyDisplay.innerHTML = currency
        })
    
})


