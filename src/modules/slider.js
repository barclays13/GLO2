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
 export default slider;