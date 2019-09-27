const validCalc = () => {
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

    document.querySelectorAll('.form-phone').forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/[^0-9+]/, '');
        });
    });
    document.getElementsByName('user_name').forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/[^а-яё]/iu, '');
        });
    });
    document.getElementsByName('user_message').forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/[^а-яё\s]/iu, '');
        });
    });
    document.getElementsByName('user_email').forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/[^a-z0-9+\@\.]/, '');
        });
    });
}; 
export default validCalc; 