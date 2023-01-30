const path = './data.json';

const fs = require('fs');

const createOneDaySchedule = () => {
    let startTime = '00:00';
    let endTime = '23:59';
    let str = '';
    for (let j = 0; j < 7; j++){
        /**use double for loop
         * or merge two table in for loop
         * double for loop will be harder two manage <tr><td> column
         * merge two table i dont know how to set them between
         */
        str += '<table class="DayColumn">'
        for (let index = 0; index < 48; index++) {
            str += `<tr><td class="schedule-Column">${index}</td></tr>\n`;
        }
        str += '</table>';
    }
    return str;
}

class ScheduleObj {
    constructor (StartDatetime, EndDatetime, user, type){
        this.StartDatetime = StartDatetime;
        this.EndDatetime = EndDatetime;
        this.user = user;
        this.type = type;
        console.log(this.user);
    }

    get User() {
        return this.user;
    }

    set User(user){
        this.user = user
    }
}

const SetSchedule = (json) => {
    let data = json['Schedule'];
    data.forEach(element => {
        let startd = new Date(element['StartDatetime']);
        let endd = new Date(element['EndDatetime']);
        new ScheduleObj(startd, endd, element['user'], element['type']);
    });
}

const ReadJsonFile = () => {
    let json = JSON.parse(fs.readFileSync(path));
    console.log(json);
    
    try {
        document.getElementById('schedule').innerHTML = createOneDaySchedule();
    } catch (error) {
        console.log(error);
    }
    SetSchedule(json);
}

$(document).ready(ReadJsonFile);