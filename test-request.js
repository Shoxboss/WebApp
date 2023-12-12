const http = require('http');

const makeRequest = async (amount) => {
  const url = 'http://localhost:3000/api/v1/users/1234567890/balance';
  const data = JSON.stringify({ amount });

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  return new Promise((resolve, reject) => {
    const request = http.request(url, options, (response) => {
      let responseData = '';

      // A chunk of data has been received.
      response.on('data', (chunk) => {
        responseData += chunk;
      });

      // The whole response has been received.
      response.on('end', () => {
        // Include the status code in the resolved value.
        resolve({ statusCode: response.statusCode, responseData });
      });
    });

    // Handle errors.
    request.on('error', (error) => {
      reject(`Error: ${error.message}`);
    });

    // Write data to the request body.
    request.write(data);

    // End the request.
    request.end();
  });
};

const makeRequestsSequentially = async () => {
  for (let i = 0; i < 502; i++) {
    try {
      const { statusCode, responseData } = await makeRequest(-2);
      console.log(
        `Response ${i + 1} - Status Code: ${statusCode}, Data: ${responseData}`
      );
    } catch (error) {
      console.error(`Error in request ${i + 1}:`, error);
    }
  }

  const { statusCode, responseData } = await makeRequest(2);
  console.log(`Response Status Code: ${statusCode}, Data: ${responseData}`);
};

makeRequestsSequentially();
