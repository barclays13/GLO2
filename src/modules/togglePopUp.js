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

export default togglePopUp;