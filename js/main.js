

for (let i = 1; i <= 100; i++) {
  chickenMonkey(i);
}

function chickenMonkey(i) {
  var string = `${i}: `;
  if (i%5 === 0) {
    string += "Chicken";
  }
  if (i%7 === 0) {
    string += "Monkey";
  }
  console.log(string);
}