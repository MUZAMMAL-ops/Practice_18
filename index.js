const { result } = require("lodash");
const fs = require("fs")
//reading local file from system
try{
const locFile = async()=>{

let result_1 = await fs.promises.readFile("C:/Users/HP/Documents/read.txt","utf-8")
console.log(result_1)
}
locFile()

}catch(error){
  console.log("system issue")
}


  

//using try...catch block to handle errors
const retrieve = async () => {
  try {
    let retrieve_1 = await fetch("https://restcountries.com/v3/all");
    let retrieve_2 = await retrieve_1.json();

    // Filtering for partial match
    const search_1 = "ope";
    const retrieve_4 = retrieve_2.filter((country) => 
      country.continents?.some((continent) =>
        continent.toLowerCase().includes(search_1.toLowerCase())
      )
    ).slice(0, 10);
    console.log(retrieve_4);
    

    // Filtering for exact match
    const search_2 = 'UTC+02:00';
    const retrieve_5 = retrieve_2.filter((country) => 
      country.timezones?.some((timezone) =>
        timezone === search_2
      )
    ).slice(0, 10);
    console.log(retrieve_5);
    

    // Return specific key and array against that key
    const requiredKey = "continents";
    
    for (let country of retrieve_2.slice(0,10)) { 
      if (country.hasOwnProperty(requiredKey)) {
        console.log(`Key: ${requiredKey}`);
        console.log(`Array: ${country[requiredKey]}`);
        
      }
    }
    

  } catch (error) {
    console.log("Error:", error);
  }
};

retrieve();
