var book = require(`./lib/grades`).book;

for(var i = 2; i < process.argv.length; i += 1) {
  book.addGrade(parseInt(process.argv[i]));
}

console.log(`There are ` + book.getCountOfGrades() +  ` grades currently in your gradebook.`);


var aveGrade = book.averageGrades();


console.log(`The class average of these grades is ` + Math.round(aveGrade));
