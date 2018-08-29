var book = require('../lib/grades').book;

exports["setUp"] = function(callback) {
  book.reset();
  callback();
};

exports["Can add new Grade"] = function (test) {
  book.addGrade(90);
  book.addGrade(70);
  var count = book.getCountOfGrades();

  test.equal (count, 2);
  test.done() ;
};

exports[`Can average all grades`] = function (test){
  book.addGrade(90);
  book.addGrade(50);

  var aveGrades = book.averageGrades();


  test.equal(aveGrades, 70);

  test.done();
}
