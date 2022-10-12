// ======== bài 1 ===========
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand === ' PM ') { 
    if (minute === 0 && second === 0){ 
        hour=12;
        prepand=' Noon';
    } 
    else{ 
        hour=12;
        prepand=' PM';
    } 
} 
if (hour === 0 && prepand === ' AM ') { 
    if (minute === 0 && second === 0){ 
        hour = 12;
        prepand = ' Midnight';
    } 
    else{ 
        hour = 12;
        prepand = ' AM';
    } 
} 
console.log(`Current Time : ${hour} ${prepand} : ${minute} : ${second}`);


// ======== bài 2 ===========
function myFunction() {
    var copyText = document.getElementById("getInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert(`Copied the text: ${copyText.value}`);
}

// ======== bài 3 ===========
let parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));
// ======== bài 4 ===========
const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log("Check JSON: ");
  console.log(isValidJSON('{"id": 1, "name": "hue"}'));
  console.log(isValidJSON('{"id": 2, name: huy}'));
  console.log(isValidJSON(null));


//======= Bài 5 =======

const fs = require('fs')
const user = {
    id: 1,
    name: 'Hue Nguyen',
    age: 20
}
const data = JSON.stringify(user)
fs.writeFile('user.json', data, err => {
    if (err) {
        throw err;
    }
    console.log('JSON data is saved.')
})
fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    const user = JSON.parse(data.toString())
    console.log(user);
})


