
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


    }
    countTimer('25 September 2019');

    //Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu');
        document.body.addEventListener('click', (event) => {
            
            let target = event.target;
            console.log('!target.closest: ', !target.closest('.active-menu'));
            if (!target.closest('.active-menu') || target.closest('.close-btn') || target.href ){
                menu.classList.remove('active-menu');
            } if (target.closest('.menu')){
                menu.classList.add('active-menu');
            }
        });
    };
    toggleMenu();

    //скролы плавные по кнопкам
    const scrolls = () => {
        const scrollServiceBlock = document.querySelector('a>img');
        let scrInterval;

        const scrollSB = () => {
            let scrollNow = document.documentElement.scrollTop;
            scrInterval = requestAnimationFrame (scrollSB);
            scrollNow += 20;
            if ( scrollNow <= 880){
                document.documentElement.scrollTop = scrollNow;
            }else{
                cancelAnimationFrame(scrInterval);
            }
        };
        scrollServiceBlock.addEventListener('click', function(){
            scrInterval = requestAnimationFrame (scrollSB);
        }); 
    };
    scrolls();

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

        slider = document.querySelector('.portfolio-content'); //весь слайдер



        slider.insertAdjacentHTML("beforeend", `<ul class="portfolio-dots"></ul>`);
        const portfolioDots = document.querySelector('.portfolio-dots');

        for (let i = 0; i < slide.length ; i++ ){
            if ( i === 0){
                portfolioDots.insertAdjacentHTML("afterbegin", `<li class="dot dot-active"></li>`);
            } if ( i > 0){
                portfolioDots.insertAdjacentHTML("beforeend", `<li class="dot"></li>`);
            }
        }

        const dot = document.querySelectorAll('.dot'); //dots

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

            if(!target.matches('.portfolio-btn, .dot')){ //проверяем клики по кнопкам prev and next and dot
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


    // валидация калькулятор
    const valodCalc = () => {
        const calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day');

        calcSquare.addEventListener('input', ()=>{
            calcSquare.value = calcSquare.value.replace(/\[0-9]/g, "" );
        });
        
        calcCount.addEventListener('input', ()=>{
   
            calcCount.value = calcCount.value.replace(/\D/g, "" );
        });

        calcDay.addEventListener('input', ()=>{
            calcDay.value = calcDay.value.replace(/\D/g, "" );
        });
    }; 
    valodCalc();

    //Наша команда смена фото
    const commandPhotos = () => {
        const command = document.querySelector('#command');
        let srcImage;

        command.addEventListener('mouseover', (event) => {
            if (event.target.src){
                srcImage = event.target.src;
                event.target.src = event.target.dataset.img;
            }
        });

        command.addEventListener('mouseout', (event) => {
            if (event.target.src){
                event.target.src = srcImage;
            }
        });
    };      
    commandPhotos ();

    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

        const countSum = () =>{
            let total = 0,
            countValue = 1,
            dayValue = 1; 
            const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

            if (calcCount.value > 1){
                countValue += (calcCount.value - 1)  / 10;
            }
            if (calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            } 
            if (typeValue && squareValue){
                total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
            } else {
                total = 0;
            }
            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {

            const target = event.target;
/*          
            if ( target.matches('.calc-type') || target.matches('.calc-square') || 
                target.matches('.calc-count') || target.matches('.calc-day')){
                console.log(target);
            }

            if( target === calcType || target === calcSquare || 
                target === calcCount || target === calcDay){
                    console.log(target);
            }
*/
            if ( target.matches('select') || target.matches('input')){
                countSum ();
            }   
            
        });

    };
    calc (100);
});