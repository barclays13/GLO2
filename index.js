
window.addEventListener('DOMContentLoaded', function () {
    'use sctrict';

    //Timer

    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            timerNumbers = document.querySelector('.timer-numbers');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24;

            return { timeRemaining, hours, minutes, seconds };

        }


        function updateClock() {

            let timer = getTimeRemaining();

            if (timer.hours >= 10) {
                timerHours.textContent = timer.hours;
            } else {
                timerHours.textContent = '0' + timer.hours;
            }

            if (timer.minutes >= 10) {
                timerMinutes.textContent = timer.minutes;
            } else {
                timerMinutes.textContent = '0' + timer.minutes;
            }

            if (timer.seconds >= 10) {
                timerSeconds.textContent = timer.seconds;
            } else {
                timerSeconds.textContent = '0' + timer.seconds;
            }


            // проверка на отрицательное время
            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            } else {
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
                timerNumbers.style.color = 'red';
            }

        }

        updateClock();


    }

    countTimer('12 September 2019');

    //Menu

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };


        /*const handlerMenu = () => {
           if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {

               menu.style.transform = `translate(0)`;

           }else {

               menu.style.transform = `translate(-100%)`;
           }
       };*/

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));


    };

    toggleMenu();


    //модальное окно popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = popup.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');


        popupBtn.forEach((elem) => {

            elem.addEventListener('click', () => {

                if (screen.width > 992) {

                    popup.style.display = "block";
                    popupContent.style.left = 0;
                    let count = 0,
                        moveInterval;

                    const popupAnimation = () => {
                        moveInterval = requestAnimationFrame(popupAnimation);
                        count++;
                        if (count < 38) {
                            popupContent.style.left = count + '%';
                        } else {
                            cancelAnimationFrame(moveInterval);
                        }
                    };
                    moveInterval = requestAnimationFrame(popupAnimation);
                } else {
                    popup.style.display = "block";
                }
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')){
                popup.style.display = "none";
            } else {
                target = target.closest('.popup-content');
                if (!target){
                    popup.style.display = "none";
                }
            }
        });
    };

    togglePopUp();

    //табы
     const tabs = () => {
         const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'), 
            tabContent = document.querySelectorAll('.service-tab');
            
            const toggleTabContent = (index) => {
                for (let i = 0 ; i < tabContent.length; i++){
                    if (index === i){
                        tab[i].classList.add('active');
                        tabContent[i].classList.remove('d-none');
                    } else {
                        tab[i].classList.remove('active');
                        tabContent[i].classList.add('d-none');
                    }
                }
            };

            tabHeader.addEventListener('click', (event) => {
                let target = event.target;  
                    target = target.closest('.service-header-tab');
                    if (target){
                        tab.forEach((item, i) => {
                            if (item === target){
                                toggleTabContent(i);
                            }
                        });
                    }
            });
     };
     tabs ();
});