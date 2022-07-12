// exercise level 1
// que 1
const challenge = "30 Days Of JavaScript";
// que 2
console.log(challenge);
// que 3
console.log(challenge.length);
// que 4
const up = challenge.toUpperCase();
// que 5
const low = challenge.toLowerCase();
// que 6
const subtring = challenge.substring(0, 2);
const substr = challenge.substr(0, 2);
console.log(substr);
// que 7
console.log(challenge.slice(3));
// que 8
console.log(challenge.includes("Script"));
// que 9
console.log(challenge.split());
// que 10
console.log(challenge.split(" "));
// que 11
const social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social.split(" "));
// que 12
challenge.replace("JavaScript", "Python");
// que 13
console.log(challenge.charAt(15));
// que 14
console.log(challenge.charCodeAt("J"));
// que 15
console.log(challenge.indexOf("a"));
// que 16
console.log(challenge.lastIndexOf("a"));
// que 17
const because =
  "You cannot end a sentence with because because because is a conjunction";

console.log(because.indexOf("because"));
// que 18
console.log(because.lastIndexOf("because"));
// que 19
console.log(because.search("because"));
// que 20
console.log(challenge.trim());
// que 21
console.log(challenge.startsWith(30));
// que 22
console.log(challenge.endsWith("Script"));
// que 23
const matchRegex = /a/gi;
console.log(challenge.match(matchRegex));
// que 24
const concat = "";
console.log(concat.concat("30 Days of", "JavaScript"));
// que 25
console.log(challenge.repeat(2));

// exercise level2
// que 1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// que 2
console.log(
  "'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'"
);
// que 3
let strTen = "10";
let ten = 10;
console.log(typeof strTen === typeof ten);
strTen = parseFloat("strTen");
console.log(typeof strTen === typeof ten);
// que 4
let nine = "9.8";
console.log(parseFloat("nine") === 10);
nine = Math.round(nine);
console.log(nine);
console.log(nine === ten);
// que 5
const python = "python";
const jargon = "jargon";
console.log(python.includes("on"));
console.log(jargon.includes("on"));
// que 6
let jargon2 = "I hope this course is not full of jargon.";
console.log(jargon2.includes("jargon"));
// que 7
let randNum = Math.floor(Math.random() * 101);
console.log(randNum);
// que 8
let min = 50.05;
let max = 101;
let randNum50 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randNum50);
// que 9
let randNum255 = Math.floor(Math.random() * 256);
console.log(randNum255);
// que 10
let javascript = "JavaScript";
console.log(javascript[Math.floor(Math.random() * 11)]);
// que 11
console.log("1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");
// que 12
console.log(because.substr(31, 24));

// exercise level3
// que 1
const love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let loveRegex = /love/g;
console.log(love.match(loveRegex));
// que 2
let becauseRegex = /because/g;
console.log(because.match(becauseRegex));
// que 3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let sentenceRegex = /[^@#%$&!]/g;
let newSentence = sentence.match(sentenceRegex).join("");
console.log(newSentence);
// que 4
const income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const incomeRegex = /\d+/g;
let incomeMatch = income.match(incomeRegex);
function sum(value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += parseFloat(incomeMatch[i]);
  }
  return sum;
}
console.log(sum(incomeMatch));
