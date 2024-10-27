//  Question  number 1

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  

delay(2000) 
.then(() => {
    console.log('This message will be logged after 2 seconds.');
});

// Question number 2

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        resolve(randomNum);
      }, 2000); 
    });
  }
  
 
fetchData()
.then((data) => {
    console.log('Random number fetched:', data);
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

// Question number 3

function processData(data) {
    console.log('Data to be processed:', data);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedData = data * 2;
        resolve(processedData);
      }, 1000); 
    });
  }
  

const inputNumber = 5;

processData(inputNumber)
.then((processedData) => {
    console.log('Processed data:', processedData);
})
.catch((error) => {
    console.error('Error processing data:', error);
});

// Question number 4

fetchData()
  .then((fetchedData) => {
    return processData(fetchedData);
  })
  .then((processedData) => {
    console.log('Final processed data:', processedData);
  })
  .catch((error) => {
    console.error('Error in processing:', error);
  });