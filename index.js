const express = require('express');
const fetch = require('cross-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Set Repsonse
function setResponse(username, repos) {
    return `<h2>${username} has ${repos} Github repos`
}

//Make request to Github for data
async function getRepos(req, res, next) {
    try{
        console.log('Fetching Data...');

        const{ username } = req.params;

        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();

        const repos = data.public_repos;

        //Set data to Redis
        // client.setEx(username, 3600, repos);

        //res.send(setResponse(username, repos));
        res.send(data);
    }   catch (err){
        console.error(err);
        res.status(500);
    }
};

app.get('/repos/:username', getRepos);

app.listen(3000, () => {
    console.log(`App listening on port ${PORT}`);
});