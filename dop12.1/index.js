'use strict';
/*
// 12 задание в основном доп
let data = new Date ();
let text = document.querySelector('.text');

function dayPeriod (){
    if( data.getHours >= 0 && data.getHours < 4 ){
        return "Доброй ночи";
    } if( data.getHours >= 4 && data.getHours < 9 ){
        return "Доброе утро";
    } if( data.getHours >= 9 && data.getHours < 15 ){
        return "Добрый день";
    } if( data.getHours >= 15 && data.getHours < 22 ){
        return "Добрый вечер";
    } else {
        return "Доброй ночи";
    }
}


function weekday() {

    switch (data.getDay()) {
        case 0:
            return "Воскресенье";
            break;
        case 1:
            return "Понедельник";
            break;
        case 2:
            return "Вторник";
            break;
        case 3:
            return "Среда";
            break;
        case 4:
            return "Четверг";
            break;
        case 5:
            return "Пятница";
            break;
        case 6:
            return "Суббота";
            break;

        default:
            break;
    }
}


function Days(){
        return  Math.floor(( Date.parse('1 January 2020') - Date.now() ) / 86400000);
}

text.textContent = ` 
${dayPeriod ()}
Сегодня: ${weekday()}
Текущее время:${data.toLocaleTimeString('en')}  
До нового года осталось ${Days()} дн.`;
*/
// доп задание

let ball = document.querySelector('.ball'),
inputBall = document.querySelector('input'),
reset = document.querySelector('.reset');

    let flyInterval,
    count = 0;

    let ballLeft = function () {
        flyInterval = requestAnimationFrame(ballLeft);
        count++ ;
        if (count < 1000) {
            ball.style.left = count*2 + 'px';
        }   else {
        let flyInterval = requestAnimationFrame(ballLeft);
        cancelAnimationFrame(flyInterval);
        }

    };

    let animate = false;
    inputBall.addEventListener('click',function(){
        if (animate){
            flyInterval = requestAnimationFrame(ballLeft);
            animate = false;
        } else {
            animate = true;
            cancelAnimationFrame(flyInterval);
        }

    });

    reset.addEventListener('click', () => {
        count = 0;
        ball.style.left = '0px';
    });
