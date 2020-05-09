const jsonfile = require('jsonfile');
const simpleGit = require('simple-git');
const moment = require('moment');
const FILE_PATH = "./data.json";

const DATE = moment().format();
const data = {
    date: DATE
}
jsonfile.writeFile(FILE_PATH, data); 

// git commit --date
simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();

