'use strict';

const output = document.getElementById('output');

const getData = (url) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url); // получаем по url
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4){ // запрос завершен -4
                return;
            }  
            if (request.status === 200) { // обрабатываем полученные данные с сервера
                const response =  JSON.parse(request.responseText);
                resolve(response);
            } else {
                reject(request.statusText);
            }
        });
        request.send();
    });
};




const outputPhotos = (data)=>{ // получаем объект по ссылке 'urlPhotos' и обрабатываем его
    const random = Math.floor(Math.random() * data.length); 
    const obj = data[random];   // в obj помещаем случайный полученный объект
    output.innerHTML = `<h4>${obj.title}</h4>
                        <img src="${obj.thumbnailUrl}" alt="${obj.title}">`;
    console.log('random: ', obj);
};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
/*
const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
        twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');


oneImg
    .then(outputPhotos)
    .catch(error => console.error(error));

    twoImg
    .then(outputPhotos)
    .catch(error => console.error(error));

        //Promise.all([oneImg, twoImg])
 */

getData (urlPhotos)
    .then(outputPhotos)
    .catch(error => console.error(error));
   