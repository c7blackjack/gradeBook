var gradeBook = {

  _grades: [],
  addGrade: function (newGrade){
  this._grades.push(newGrade)
  },

  getCountOfGrades: function() {
    return this._grades.length;
  },

  averageGrades: function() {
    var total = 0;
    var aveGrades;


    for (var i = 0; i < this._grades.length; i++){
    total += this._grades[i];
    }

    aveGrades = total/this._grades.length;
    return aveGrades;

  }




};

exports.book = gradeBook;

 console.log("test");
