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
                    
                case 1:
                    return "Понедельник";
                    
                case 2:
                    return "Вторник";
                
                case 3:
                    return "Среда";
                
                case 4:
                    return "Четверг";
                    
                case 5:
                    return "Пятница";
                case 6:
                    return "Суббота";
                

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
        До нового года осталось ${Days()} дн.`};



setInterval( showDate , 1000);