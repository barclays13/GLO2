
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementclosest from 'element-closest';
elementclosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import scrolls from './modules/scrolls';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validCalc from './modules/validCalc';
import commandPhotos from './modules/commandPhotos';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timerq
countTimer('30 September 2020');
//Menu
toggleMenu();
//скролы плавные по кнопкам
scrolls();
//модальное окно popup
togglePopUp();
//табы
tabs ();
 //slider
slider ();
// валидация калькулятор
validCalc();
//Наша команда смена фото
commandPhotos ();
//калькулятор
calc (100);
//sen-ajax-form
sendForm ();