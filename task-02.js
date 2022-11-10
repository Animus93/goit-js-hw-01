// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
// Сравни эти значения и по результатам выведи:

const total = 100;
const ordered = document.querySelector('.summ');
const buttonRef = document.querySelector('.plus');
buttonRef.addEventListener('click', calculation);

function calculation (){
    ordered.value <= total? console.log('Заказ оформлен, с вами свяжется менеджер') : console.log('На складе недостаточно твоаров!');
}
