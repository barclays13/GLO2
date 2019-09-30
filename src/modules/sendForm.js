const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessasge = 'Спасибо, мы скоро с вами свяжемся!',
    allForm = document.getElementsByName('user_form'),
    statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    
    allForm.forEach((elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            if(elem !== allForm[2]){
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
            } else {
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
            }
            
            const formData = new FormData(elem);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Status network is not 200');
                }
                statusMessage.textContent = successMessasge;
                const formInput = elem.querySelectorAll('input').forEach((elem2)=> elem2.value = '');
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;