'use strict';



let showDate = function (){

        let date = new Date ();
        let text = document.querySelector('.text');

        function dayPeriod (){

            if ( date.getHours() >= 4 && date.getHours() < 9 ){
                return "Доброе утро";
            } if ( date.getHours() >= 9 && date.getHours() < 15 ){
                return "Добрый день";
            } if ( date.getHours() >= 15 && date.getHours() < 22 ){
                return "Добрый вечер";
            } else {
                return "Доброй ночи";
            }
        }

        function weekday() {

            switch (date.getDay()) {
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

        text.innerText = ` 
        ${dayPeriod ()}         Сегодня: ${weekday()} 
        Текущее время:${date.toLocaleTimeString()}  
        До нового года осталось ${Days()} дн.`

}



setInterval( showDate , 1000);