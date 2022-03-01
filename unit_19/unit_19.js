function toOut(a, b) {
    document.querySelector(`.out-${a}`).innerHTML = b;
}
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    toOut(1, this.innerHTML)
}

document.querySelector('.div-1').onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2() {
    let result = event.altKey;
    document.querySelector('.out-2').innerHTML = result
}

document.querySelector('.div-2').onclick = t2;


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    w3 += 5;
    this.style.width = `${w3}px`;

}
document.querySelector('.div-3').onclick = t3;


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {

    toOut(4, this.innerHTML)
}

document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    let x = this.classList
    if (x.contains('active')) {
        x.remove('active')
    } else {
        x.add('active')
    }
}
let div5 = document.querySelector('.div-5').ondblclick = t5;


// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    let ul6 = document.querySelector('.ul-6');
    if (ul6.classList.contains('hide')) {
        ul6.classList.remove('hide')
    } else {
        ul6.classList.add('hide')
    }
}

document.querySelector('.div-6').ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
// function t7() {
// }

document.querySelector('.div-7').oncontextmenu = t5;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let flag = true;
function t8() {
    flag = !flag
    if (flag) {
        document.oncontextmenu = function () {
            return false
        }
    }
    else {
        document.oncontextmenu = function () {
            return true
        }
    }
}

document.querySelector('.ch-8').onchange = t8;


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    this.src = 'img/2.png'
}
document.querySelector('.div-9 img').oncontextmenu = t9

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

// function t10() {
//     }

document.querySelector('.div-10 img').onmouseenter = t9;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
    this.src = 'img/1.png';
}

let div11 = document.querySelector('.div-11 img')
div11.onmouseenter = t9;
div11.onmouseleave = t11;

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let t12 = () => div12.classList.add('active')

let div12 = document.querySelector('.div-12')

div12.addEventListener('mousedown', t12);


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let t13 = () => div13.classList.add('active');
let t13_1 = () => div13.classList.remove('active')

div13 = document.querySelector('.div-13')
div13.addEventListener('mousedown', t13)
div13.addEventListener('mouseup', t13_1)


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').classList.add('active')
}

document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let div15 = document.querySelector('.div-15')
let num = 1;
function t15() {
    num++;
    div15.innerHTML = num;
}

div15.addEventListener('mousemove', t15)
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div16 = document.querySelector('.div-16');
let w = div16.offsetWidth;
function t16() {
    w++;
    div16.style.width = `${w}px`;
}

div16.addEventListener('mousemove', t16)



// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    div16.addEventListener('mousemove', t16);
}

function t17Off() {
    div16.removeEventListener("mousemove", t16);
}

btnOn = document.querySelector('.b-17_on');
btnOn.onclick = t17On;

btnOff = document.querySelector('.b-17_off');
btnOff.onclick = t17Off;




// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let div18 = document.querySelector('.div-18');
let w18 = div18.offsetWidth;

function t18() {
div18.innerHTML = w18
}

div18.onmouseenter = t18

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let div19 = document.querySelector('.div-19');

function t19() {
    let classL = div19.classList
    div19.innerHTML = classL;
}
div19.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let progress = document.querySelector('progress');

function t20() {
progress.value ++

}
progress.addEventListener('mousemove', t20)

// ваше событие здесь!!!