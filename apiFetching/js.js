fetch(`custumApi/human.json`)
.then(Response=>Response.json())
.then(data=>{
    for(let x in data){
        let index=data[x];
    document.write(`name- ${index.name}---age ${index.age}---website- ${index.website}<br>`);
    }
    console.log(data)
}
)
.catch(error=>console.log("error catched by catch"));