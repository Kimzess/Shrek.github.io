var letters = ["A", "a", "B",
 "b", "C",
 "c", "D", "d",
 "E", "e", "F", "f", "G", "g",
 "H",
 "h", "I", "i", "J", "j",
 "K", "k", "L", "l", "M", "m",
 "N",
 "n", "O", "o", "P", "p",
 "Q", "q",
 "R", "r", "S", "s", "T", "t",
 "U",
 "u", "V", "v",
 "W", "w", "X", "x", "Y", "y",
 "Z",
 "z"
];
var numbers = ["1", "2", "3",
 "4", "5",
 "6", "7", "8", "9", "0"
];
var specials = ["-", "_", "&",
 ".",
 ":", ";", "$", "%", "!", "?",
 ",",
 "/", "#", "@", "()", ")(",
 "'", "*",
 ")", "("
];
var checkNumber = false;

function checkNum() {
 checkNumber = !checkNumber;
}

var checkSpecial = false;

function checkSpec() {
 checkSpecial = !checkSpecial;
}

function pickrandom(array) {
 var random = Math.floor(Math
  .random() * array.length);
 return array[random];
}

var y = [
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(numbers),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters)
];
var s = [
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(letters),
 pickrandom(specials),
 pickrandom(specials)
]

var z;

function generate() {
 if (checkNumber &&
  checkSpecial) {
  z = pickrandom(s) +
   pickrandom(y) +
   pickrandom(s) +
   pickrandom(y) +
   pickrandom(s) +
   pickrandom(y) +
   pickrandom(s) +
   pickrandom(y);
 } else if (checkSpecial) {
  z = pickrandom(s) +
   pickrandom(s) +
   pickrandom(s) +
   pickrandom(s) +
   pickrandom(s) +
   pickrandom(s) +
   pickrandom(s) +
   pickrandom(s);
 } else if (checkNumber) {
  z = pickrandom(y) +
   pickrandom(y) +
   pickrandom(y) +
   pickrandom(y) +
   pickrandom(y) +
   pickrandom(y) +
   pickrandom(y) +
   pickrandom(y);
 } else {
  z = pickrandom(letters) +
   pickrandom(letters) +
   pickrandom(letters) +
   pickrandom(letters) +
   pickrandom(letters) +
   pickrandom(letters) +
   pickrandom(letters) +
   pickrandom(letters);
 }
 document.getElementById(
   "password")
  .value = z;
 document.getElementById("tipp")
  .innerHTML = "";
}
