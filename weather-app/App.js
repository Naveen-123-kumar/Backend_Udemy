const request= require('request');
const url='http://api.weatherstack.com/current?access_key=7a132d7edfed6ec752e3376fca46d9d7&query=37.8267,-122.4233';
request({url: url,json:true}, (error,response)=>{
    if(error){
        console.log(error)
    }
    else if(response.body.error){
        console.log('Unable to find location');

    }
    else{
    console.log(response.body.daily.data[0].summary + 'It is currenently ')

    }
    // const data=JSON.parse(response.body)
    // console.log(data.current)
    // console.log(response.body.current.temperature)
})

// const geoCodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places-permanent/20001;20009;22209.json?access_token=pk.eyJ1IjoiMTk5OG5hdmVlbiIsImEiOiJjbDBvY2VibHIxb3JsM2Zxa3Z1Z2dpcW96In0.UbxiSBN1-8GIL7liFnAoIg'
// request({url:geoCodeUrl,json:true},(error,response)=>{
//     const latitude=response.body.features[0].center[0]
//     const longitude=response.body.features[0].center[1]
//     console.log(latitude,longitude)
// })
