async function loadData() {
    // if we use a relative URL, axios will try
    // to look for the file in the same directory
    // as the data.js
    const response = await axios.get("https://raw.githubusercontent.com/apexcharts/apexcharts.js/master/db.json")
    // console.log(response.data);
    // response.data 才能返回值，而不是promise
    console.log(response)
    return response.data;
}

// the data parameter (aka argument) should be an array of sales record
function transformData(data){
    // create a simplified data set we're only interested in the year and in the amount
    let earningsFor = [];
    // data mapping
    // method 1: use for loop
    for (let dataPoint of data) {
        earningsFor.push({
            "amount": dataPoint.payment.amount,
            "date": new Date(dataPoint.completed_at)
        });
    }
    
    // method 2: .map()
    const earningsMap = data.map(function(dataPoint){
        // whatever is returned from the mapping function will go into the results array
        // here you can add if else, also you can do filter
        return {
            amount: dataPoint.payment.amount,
            data: new Date(dataPoint.completed_at)
        }
    })

    console.log(earningsFor);
    console.log(earningsMap);
    
    // filtering
    // only keeping data points(or elements) that meets the critera
    const shortlisted = []
    for (let dataPoint of earningsMap){
        if(dataPoint.date.getFullYear() == 2020){
            shortlisted.push(dataPoint);
        }
    }
    console.log("shortlisted=", shortlisted)
}