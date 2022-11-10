// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const country = prompt('Введите страну доставки');
switch (country.toLocaleLowerCase()) {

    case 'китай':
        console.log(`Доставка в ${country} будет стоить 100 кредитов`);
        break;

    case 'чили':
        console.log(`Доставка в ${country} будет стоить 250 кредитов`);
        break;

    case 'австралия':
        console.log(`Доставка в ${country} будет стоить 170 кредитов`);
        break;

    case 'индия':
        console.log(`Доставка в ${country} будет стоить 80 кредитов`);
        break;

    case 'ямайка':
        console.log(`Доставка в ${country} будет стоить 120 кредитов`);
        break;

    default:
        console.log('В вашей стране доставка не доступна');
        break;
};