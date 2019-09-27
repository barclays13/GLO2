function countTimer(deadline) {

    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        timerNumbers = document.querySelector('.timer-numbers');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = updateClock(Math.floor(timeRemaining % 60)),
            minutes = updateClock(Math.floor((timeRemaining / 60) % 60)),
            hours = updateClock(Math.floor(timeRemaining / 60 / 60) % 24);
        return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    const viewTimer = () =>{
            let timer = getTimeRemaining();
             // проверка на отрицательное время
        if (timer.timeRemaining > 0){
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            setInterval(viewTimer, 1000);
        } else {
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
            timerNumbers.style.color = 'red';
        }
        };
        viewTimer();
    updateClock();


};

export default countTimer;

