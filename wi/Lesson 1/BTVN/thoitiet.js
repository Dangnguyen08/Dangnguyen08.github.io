let getDataAPI = async (city)=>{
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}saigon&appid=7674da634845e7c2d8c53ab0a48b8e29`

    let preData = await fetch(api)
    let data = await preData.json()

    console.log(data)
    console.log(data.weather[0].icon)
    console.log(data.name)
    console.log(data.main.temp)
    console.log(data.weather[0].description)
}

let renderData = (data)=>{
    let dom = document.querySelector(".show")
    let html = <img src="" alt=""></img>
    
}