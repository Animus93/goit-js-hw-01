// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

const message = prompt('Введите');
if (message == null){
    alert('Отменено пользователем!');
} else if (message == 'admin123'){
    alert('Добро пожаловать!');
}else{
    alert('Доступ запрещен, неверный пароль!')
}