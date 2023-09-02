
var question = [];
var answer = [];
var correctAnswer = [];
var messageDumb = "Игрок слабоумный() Вариантов ответа 4."

question[0] = "Горят два дома: богатый и бедный.Какой дом будет тушить полиция?";
answer[0] = "Богатый", "Полиция не тушит пожаров", "Бедный", "Два дома";
correctAnswer[0] = 2;

window.alert("И пусть начнуться игры разума");

for(let i = 0; i < question.length; i++){
    window.alert(question[i]);
    
    let string = "";

    for(let j = 0; j < answer[i].length; j++){
        string += "1 - " + answer[i][j] + '\n';
    }
    window.alert(string);



}