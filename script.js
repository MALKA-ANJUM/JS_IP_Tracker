console.log("ip tracker");
let api = `https://ipapi.co/json/`

fetch(api)
    .then(res => res.json())
    .then(data => console.log(data))