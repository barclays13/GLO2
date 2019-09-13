
window.addEventListener('DOMContentLoaded', function(){
    'use sctrict';


    function countTimer(deadline){

            let timerHours = document.querySelector('#timer-hours'),
                timerMinutes = document.querySelector('#timer-minutes'),
                timerSeconds = document.querySelector('#timer-seconds'),
                timerNumbers = document.querySelector('.timer-numbers');

        function getTimeRemaining(){
            let dateStop = new Date (deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = ( dateStop - dateNow ) / 1000,
            seconds = Math.floor( timeRemaining % 60),
            minutes = Math.floor ( (timeRemaining / 60) % 60 ),
            hours = Math.floor( timeRemaining / 60 / 60) % 24;

            return {timeRemaining, hours, minutes, seconds};

        }


        function updateClock(){

                let timer = getTimeRemaining();

                if(timer.hours >= 10){

                    timerHours.textContent = timer.hours;
                } else {
                    timerHours.textContent = '0' + timer.hours;
                }

                if( timer.minutes >= 10 ){
                    
                    timerMinutes.textContent = timer.minutes;

                } else {

                    timerMinutes.textContent = '0' + timer.minutes;
                }

                if(  timer.seconds >= 10){

                    timerSeconds.textContent = timer.seconds;
                } else {
                    timerSeconds.textContent = '0' + timer.seconds;
                }


                // проверка на отрицательное время
                if (timer.timeRemaining > 0){
                    
                    setInterval (updateClock, 1000);

                } else {

                    timerHours.textContent = "00";
                    timerMinutes.textContent = "00";
                    timerSeconds.textContent = "00";
                    timerNumbers.style.color = 'red';

                }

        }

        updateClock();


    }

    countTimer ('15 September 2019');
});