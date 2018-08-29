var book = require('../lib/grades').book;

exports["Can add new Grade"] = function (test) {
  book.addGrade(90);
  book.addGrade(70);
  var count = book.getCountOfGrades();

  test.equal (count, 2);
  test.done() ;
};

exports[`Can average all grades`] = function (test){
  var aveGrades = book.averageGrades();

  test.ok(aveGrades);

  test.done();
}
