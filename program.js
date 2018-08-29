var book = require(`./lib/grades`).book;

book.addGrade(90);
book.addGrade(85);
book.addGrade(73);

console.log(`There are ` + book.getCountOfGrades() +  ` grades currently in your gradebook.`);


var aveGrade = book.averageGrades();


console.log(`The class average of these grades is ` + Math.round(aveGrade));
