const axios = require('axios');

export default axios.create({
    baseURL: 'http://localhost:3000/',
    responseType: "json",
    // headers: {
    //     Authorization: 'Bearer '+ token
    // }
});
