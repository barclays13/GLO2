'use strict';
let data = new Date ();


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



console.log(` 
${dayPeriod ()}
Сегодня: ${weekday()}
Текущее время:${data.toLocaleTimeString('en')}  
До нового года осталось ${Days()} дн.

`);