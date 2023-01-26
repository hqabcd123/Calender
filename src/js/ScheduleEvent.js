const path = '../data.json';

const fs = require('fs');
const json = JSON.parse(fs.readFileSync(path));

window.onload = function(){
    ReadJsonFile();
}

const ReadJsonFile = () => {
    console.log(json)
    document.getElementsByClassName('schedule-event').innerHTML = json;
}