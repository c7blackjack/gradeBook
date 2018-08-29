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
  },

  reset: function() {
    this._grades = [];
  },

  getLetterGrade: function(){
    var aveGrades = this.averageGrades();
    if ( aveGrades >= 90){
      return "A";
    } else if (aveGrades >= 80) {
      return "B";
    } else if (aveGrades >= 70) {
      return "C";
    } else if (aveGrades >= 60) {
      return "D";
    } else return "F";
  }




};

exports.book = gradeBook;
