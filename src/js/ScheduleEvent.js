const path = './data.json';

const fs = require('fs');

const createOneDaySchedule = () => {
    let startTime = '00:00';
    let endTime = '23:59';
    let str = '<table>';
    for (let j = 0; j < 7; j++){
        /**use double for loop
         * or merge two table in for loop
         * double for loop will be harder two manage <tr><td> column
         * merge two table i dont know how to set them between
         */
        str += '<t>'
        for (let index = 0; index < 48; index++) {
            str += `<tr><td class="schedule-Column">${index}</td></tr>\n`;
        }
    }
    str += '</table>'
    return str;
}

const ReadJsonFile = () => {
    let json = JSON.parse(fs.readFileSync(path));
    console.log(json);
    
    try {
        document.getElementById('schedule').innerHTML = createOneDaySchedule();
    } catch (error) {
        console.log(error);
    }
}
$(document).ready(ReadJsonFile);