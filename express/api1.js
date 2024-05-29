function getAnimalData(){
    fetch("https://fakerapi.it/api/v1/persons")
        .then(function(response){
            response.json()
                .then(function(finalData){
                    console.log(finalData)
            })
    })
}

getAnimalData();

async function bruhh(){
    const response = await fetch("https://fakerapi.it/api/v1/persons")
    const data = await response.json()
    console.log(data)
}

bruhh();