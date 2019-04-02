'use strict';

/*Задача1*/

let message;
const value = prompt('Введите пароль');
const ADMIN_PASSWORD = 'm4ng0h4ckz';

if (value === null) { 
message = 'Отменено пользователем!'; 
}

else if (value !== ADMIN_PASSWORD) { 
message = 'Доступ запрещен, неверный пароль!'; 
}

else {
message = 'Добро пожаловать!'; 
}

alert(message);



/*Задача2*/

const credits = 23580;
const pricePerDroid = 3000;
const price= prompt('Сколько дроидов вы хотите купить?');
let totalPrice;
let quantity;


quantity = 3;
if (price === null) { 
    console.log('Отменено пользователем!'); 
}
else {
    totalPrice = credits - pricePerDroid * quantity;
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${totalPrice} кредитов`);
}

quantity = 5;
if (price > credits) {
    console.log('Недостаточно средств на счету!');  
}
else {
    totalPrice = credits - pricePerDroid * quantity;
    alert(`Вы купили ${quantity} дроидов, на счету осталось ${totalPrice} кредитов`);
}

/*Задача3*/

let country;
const count = prompt('Укажите страну доставки');

switch (count) {
case country = "China":
    console.log('Доставка в Индию будет стоить 100 кредитов');
    break;

case country = 'SouthAmerica':
    console.log('Доставка в Южную Америку будет стоить 250 кредитов');
    break;

case country = 'Australia':
    console.log('Доставка в Австралию будет стоить 170 кредитов');
    break; 

case country = 'India':
    console.log('Доставка в Индию будет стоить 80 кредитов');
    break;

case country = 'Jamaica':
    console.log('Доставка на Ямайку будет стоить 120 кредитов');
    break;

default:
    console.log('В вашей стране доставка не доступна');
}


