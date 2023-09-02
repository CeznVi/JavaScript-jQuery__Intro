///Game messages
var messageDumb = "Игрок слабоумный() Варианты ответа от 1 до 4. Конец игры";
var wrongAnswer = "Не верный ответ. Конец игры";
var corectAnswer = "Вы ответили верно";
var confirmQuestion = "Играем дальше? или забираем деньги и уходим.";
var takeMoney = "Конец игры, вы забрали деньги.";
var congratulation = "Конец игры, вы ответили на все вопросы!."
/// -----------

var ansQuestion = [];
var isGameOver = false;
var countQuestion = 0;
var userMoney = 0;

/// Init question
ansQuestion[0] = {
    question: "Горят два дома: богатый и бедный.Какой дом будет тушить полиция?",
    answ1: "Богатый",
    answ2: "Полиция не тушит пожаров",
    answ3: "Бедный",
    answ4: "Два дома",
    corect: 2
}
ansQuestion[1] = {
    question: "Какие часы показывают верное время только два раза в сутки?",
    answ1: "Которые остановились",
    answ2: "Швейцарские",
    answ3: "БигБен",
    answ4: "Которые у соседа",
    corect: 1
}
ansQuestion[2] = {
    question: "222+56=?",
    answ1: "123",
    answ2: "276",
    answ3: "278",
    answ4: "234",
    corect: 3
}
ansQuestion[3] = {
    question: "Что можно увидеть с закрытыми глазами? ",
    answ1: "Будущее",
    answ2: "Ничего",
    answ3: "Себя",
    answ4: "Сон",
    corect: 4
}
ansQuestion[4] = {
    question: "Когда небо ниже от земли?",
    answ1: "Когда туман",
    answ2: "Когда давление понизилось",
    answ3: "Когда смотришь в воду",
    answ4: "Когда темно",
    corect: 3
}
ansQuestion[4] = {
    question: "(2+2)*2=?",
    answ1: "8",
    answ2: "6",
    answ3: "5",
    answ4: "10",
    corect: 1
}
ansQuestion[5] = {
    question: "2*2+2=?",
    answ1: "8",
    answ2: "6",
    answ3: "5",
    answ4: "10",
    corect: 2
}
ansQuestion[6] = {
    question: "Электропоезд идет по ветру. Куда идет дым?",
    answ1: "Зависит от направления ветра",
    answ2: "На север",
    answ3: "На юг",
    answ4: "У электропоезда нет дыма",
    corect: 4
}
ansQuestion[7] = {
    question: "Сколько горошин может войти в один стакан? ",
    answ1: "12 шт.",
    answ2: "Зависит от размера стакана",
    answ3: "55 шт.",
    answ4: "Нисколько, горошины не ходят",
    corect: 4
}
ansQuestion[8] = {
    question: "Из какой посуды нельзя ничего съесть?",
    answ1: "Из которой есть президент",
    answ2: "Стеклянной",
    answ3: "Пустой",
    answ4: "Фарфоровой",
    corect: 3
}
ansQuestion[9] = {
    question: "Сколько лет в году?",
    answ1: "Одно лето",
    answ2: "Три",
    answ3: "Нисколько",
    answ4: "Зависит от того какой год : высокосный или нет",
    corect: 1
}
ansQuestion[10] = {
    question: "Не машет крылом, но летает; не птица, но птиц обгоняет",
    answ1: "Вертолет",
    answ2: "Самолет",
    answ3: "Динозавр летун",
    answ4: "Воробей",
    corect: 2
}
ansQuestion[11] = {
    question: "Назови ее по имени и она исчезнет",
    answ1: "Шпионка",
    answ2: "Валерия",
    answ3: "Тишина",
    answ4: "Бывшая/бывший",
    corect: 3
}
ansQuestion[12] = {
    question: "Что можно удерживать, не касаясь его руками?",
    answ1: "Статус",
    answ2: "Совесть",
    answ3: "Депозит",
    answ4: "Дыхание",
    corect: 4
}
ansQuestion[13] = {
    question: "Что курил автор этих вопросов?",
    answ1: "Ничего",
    answ2: "Крепкую дурь",
    answ3: "Скорее всего тут не только курили",
    answ4: "а Я просто ответ..",
    corect: 1
}
///END init question ------------------------------

window.alert("И пусть начнуться игры разума");

///Тело цикла игры
while (!isGameOver) {
    //show question
    window.alert(ansQuestion[countQuestion].question);

    let userAnsw = window.prompt(`Варианты ответов \n 
    1-- ${ansQuestion[countQuestion].answ1}\n 
    2-- ${ansQuestion[countQuestion].answ2}\n
    3-- ${ansQuestion[countQuestion].answ3}\n
    4-- ${ansQuestion[countQuestion].answ4}\n
    `);

    if (userAnsw < 1 || userAnsw > 4) {
        window.alert(messageDumb);
        isGameOver = true;
    }
    else if (userAnsw != ansQuestion[countQuestion].corect) {
        window.alert(wrongAnswer);
        userMoney = 0;
        isGameOver = true;
    }
    else {
        userMoney += 1000;
        window.alert(`${corectAnswer}. На вашем счету: ${userMoney} доларов`);
    }

    countQuestion++;
    if (countQuestion == ansQuestion.length) {
        window.alert(`${congratulation}.\n
        Вы заработали ${userMoney} долларов`);

        isGameOver = true;
        break;
    }
    else{
        let confirm = window.confirm(`${confirmQuestion} \n У вас на счету ${userMoney} долларов`);
            if (confirm == false) {
                window.alert(`${takeMoney}. \n
                Вы заработали ${userMoney} \n
                И ответили на ${countQuestion} вопросов
                `)
                isGameOver = true;
                break;
        }
    }
}
