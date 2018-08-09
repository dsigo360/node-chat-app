const moment = require('moment');

const date = moment();
// date.add(100, 'years')
// console.log(date.format('MMM Do YYYY'));

console.log(date.format('h:mm a'));

const createdAt = 1234;
const otherDate = moment(createdAt);

console.log(otherDate.format('h:mm a'));

const newTimestamp = moment.valueOf();
console.log(date.format('h:mm a'));
