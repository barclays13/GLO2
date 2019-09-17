
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

    countTimer('20 September 2019');

    //Menu

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'),
            body = document.querySelector('body');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        
        body.addEventListener('click',() => {
                let target = event.target;

                if (menu.classList.contains('active-menu')){ // клик мимо меню, оно закрывается
                    target = target.closest('menu');
                    if (!target){
                        handlerMenu();
                    }
                    target = event.target;
                } if (target.closest('.menu')){ //открываем меню
                handlerMenu();
                } if (target.classList.contains('close-btn')){ //закрываем меню на "крест"
                    handlerMenu();
                } 
                
            }
        );


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


     //slider
     const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'), // 1 слайд
        bat = document.querySelectorAll('.portfolio-btn'), // кнопки next and prev
        dot = document.querySelectorAll('.dot'), //dots
        slider = document.querySelector('.portfolio-content'); //весь слайдер

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => { //переключаем(скрываем) слайд с помощью удаление класса
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => { //переключаем(показываем) слайд с помощью добавления класса
            elem[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {

                prevSlide (slide, currentSlide, 'portfolio-item-active');
                prevSlide (dot, currentSlide, 'dot-active');
                currentSlide++;
                if (currentSlide >= slide.length){
                    currentSlide = 0;
                }
                nextSlide (slide, currentSlide, 'portfolio-item-active');
                nextSlide (dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => { //вызов функции с интервалом каждые 3с
            interval = setInterval ( autoPlaySlide , time);
        };
        
        const stoptSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){ //проверяем клики по кнопкам prev and next and dot (если на них то выполняет ниже)
                return;
            }

            prevSlide (slide, currentSlide, 'portfolio-item-active'); //у текущего слайда убираем акт классы
            prevSlide (dot, currentSlide, 'dot-active'); //у текущей точки убираем акт классы

            if (target.matches('#arrow-right')){ // клик некст добавляем +1 слайд
                currentSlide++;
            } if (target.matches('#arrow-left')){ // клик прев уменьшем -1 слайд
                currentSlide--;
            } else if (target.matches('.dot')){ // по индексу активируем точку
                dot.forEach((elem, index) => {
                    if ( elem === target){
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length){ // проверка на посл слайд, то возвр к 1 слайду
                currentSlide = 0;
            } if (currentSlide < 0){ // проверка есди 1 слайд и жмем прев то переход к посл
                currentSlide = slide.length -1 ;
            } 

            nextSlide (slide, currentSlide, 'portfolio-item-active'); // присв. акт классы
            nextSlide (dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => { //при наведении мышки на указ. слайды приост слайдер
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                stoptSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => { //при убранной мышки запускаем слайд
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                startSlide();
            }
        });


        startSlide(1500);

     };

     slider ();
});