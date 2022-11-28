async function loadData(url) {
    const response = await axios.get(url);
    return response.data;
}

// the data parameter (aka arugment)
// should be an array of sales record
function transformData(data) {
    // create a simplified data set
    // we're only interested in the year
    // and in the amount

    // How to use FOR loop to do MAPPING
    // let earnings = [];
    // for (let dataPoint of data) {
    //     earnings.push({
    //         "amount": dataPoint.payment.amount,
    //         // create a new date object instead of a date string
    //         "date": new Date(dataPoint.completed_at)
    //     });
    // }
    // Use the .map function that's available to all arrays
    const earnings = data.map(function(dataPoint){
        // whatever is returned from the mapping function
        // will go into the results array
        return {
            amount: dataPoint.payment.amount,
            date: new Date(dataPoint.completed_at)
        }
    })

    // FILTERING
    // Only keeping data points (or elements) that meets
    // a certain critera.
    const shortlisted = [];
    for (let dataPoint of earnings) {
        if (dataPoint.date.getFullYear() == 2020) {
            shortlisted.push(dataPoint);
        }
    }
    console.log("shortlisted=", shortlisted);

}