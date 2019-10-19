"use strict";

const adminLogin = 'admin';

const adminPassword = 'm4ngo1zh4ackz0r';

const enterLogin = 'Введите ваш логин.';

const enterPassword = 'Введите ваш пароль.';

const wrongLogin = 'Доступ запрещен, неверный логин!';

const wrongPassword = 'Доступ запрещен, неверный пароль!';

const welcome = 'Добро пожаловать!';

const declined = 'Отменено пользователем!';




const userLogin = prompt(enterLogin);

if(userLogin !== null){

    if(userLogin === adminLogin){

        const userPassword = prompt(enterPassword);

        if(userPassword !== null){
        
        if(userPassword === adminPassword){
            alert(welcome);
        } else{
            alert(wrongPassword)
        }
        } else{
            alert(declined);
        }

} else {
    alert(wrongLogin)
}
} else {
    alert(declined);
}
