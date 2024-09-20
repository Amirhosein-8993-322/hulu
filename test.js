var axios = require('axios');
var fs = require("fs/promises")
var fss = require("fs")
var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://seeko.film/api/v1/ghost/get/movies/sort?trending=2&genre=foreign&free=1&country=0&persian=1&query=&affiliate=1&imdb=&page',
    headers: {}
};

axios(config)
    .then(function (response) {
        const file = fss.readFileSync("data.json", "utf-8")
        console.log(file.concat({ foreign: JSON.stringify(response.data.data.movies) }));
        fs.writeFile("data.json", file.concat(JSON.stringify({ foreign: response.data.data.movies })))
    })
    .catch(function (error) {
        console.log(error);
    });
