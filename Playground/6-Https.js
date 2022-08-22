const https=require('https');
const url=''
const request=https.request(url,(response)=>{
    let data=''
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
    })
    response.on('end',(chunk)=>{
        const body=json.parse(data);
        console.log(body);
    })
})
request.on('error',(error)=>{
    console.log('error is',error)
})
request.end();