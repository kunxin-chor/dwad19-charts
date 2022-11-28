async function loadData() {
    // if we use a relative URL, axios will try
    // to look for the file in the same directory
    // as the data.js
    const response = await axios.get("https://raw.githubusercontent.com/apexcharts/apexcharts.js/master/db.json")
    // console.log(response.data);
    return response.data;
}