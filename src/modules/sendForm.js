const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessasge = 'Спасибо, мы скоро с вами свяжемся!';

    const form1 = document.getElementById('form1'),
     form2 = document.getElementById('form2'),
     form3 = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';

    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        form1.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form1);
        let body = {};
//            for (let val of formData.entries()){
//                body[val[0]] = val [1];
//            }
        formData.forEach((val, key) => {
            body[key] = val;
        });
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then((response)=> {
                if (response.status !== 200){
                    throw new Error ('Status  network not 200');
                }
                statusMessage.textContent = successMessasge;
                const formInput = form1.querySelectorAll('input').forEach((elem)=> elem.value = '');
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        form2.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form2);
        let body = {};
//            for (let val of formData.entries()){
//                body[val[0]] = val [1];
//            }
        formData.forEach((val, key) => {
            body[key] = val;
        });
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then((response)=> {
                if (response.status !== 200){
                    throw new Error ('Status  network not 200');
                }
                statusMessage.textContent = successMessasge;
                const formInput = form2.querySelectorAll('input').forEach((elem)=> elem.value = '');
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });

    form3.addEventListener('submit', (event) => {
        event.preventDefault();
        form3.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form3);
        let body = {};
//            for (let val of formData.entries()){
//                body[val[0]] = val [1];
//            }
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then((response)=> {
                if (response.status !== 200){
                    throw new Error ('Status  network not 200');
                }
                statusMessage.textContent = successMessasge;
                const formInput = form3.querySelectorAll('input').forEach((elem)=> elem.value = '');
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
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