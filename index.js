function shout(string) {return string.toUpperCase();}
function whisper(string) {return string.toLowerCase();}
function logShout(str) {    console.log(str.toUpperCase()); }
logShout ("Hello")
function logWhisper(str) {    console.log(str.toLowerCase()); }
logWhisper ("Hello")
function sayHiToHeadphonedRoommate(string) {    if (string === string.toLowerCase()) {      return "I can't hear you!";    } else if (string === string.toUpperCase()) {      return "YES INDEED!";    } else if (string = ("Let's have dinner together")) {  return "I would love to!";  } else {    return string;   }    }
console.log(sayHiToHeadphonedRoommate("hello"));  
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));