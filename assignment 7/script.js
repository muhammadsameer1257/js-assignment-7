var questions = [
    "What is the capital of Pakistan?",
    "How many Surahs are there in the Holy Quran?",
    "Which is the worst mountain in Pakistan?",
    "What do we breathe through?",
    "Who was the founder of pakistan?"
  ]
  var answers = [
    "islamabad",
    "114",
    "k2",
    "oxygen",
    "quid-e-azam"
  ]

  var correctAns = []
  var wrongAns = []

  for (var i = 0; i < questions.length; i++) {
        var userAnswer = prompt(questions[i]);
        if (userAnswer === answers[i]) {
            alert("Correct Answer");
            correctAns++;
        }
        else {
            alert("Your answer are worng! correct anwer is :" + "\n" + answers[i]);
            wrongAns++;
        }
      }
      if(correctAns === 5){
        var grade = "Super perfomance";
      }
      else if(correctAns === 4){
        var grade = "Excelent Perfomance";
      }
      else if(correctAns === 3){
        var grade = "Good Perfomance";
      }
      else if(correctAns === 2){
        var grade = "Fair perfomance";
      }
      else{
        var grade = "Bad Peromance";
      }

    alert("Your correct Answers is:  "+ correctAns + "\n" +
        "Your Wrong answer is : " + wrongAns + "\n" +
        grade
         
    );

    