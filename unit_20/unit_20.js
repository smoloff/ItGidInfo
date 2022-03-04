function toOut(a, b) {
    document.querySelector(`.out-${a}`).innerHTML = b;
}
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
    toOut(1, event.key);
    console.log(event);
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event) {
    toOut(2, event.keyCode);
    console.log(event);

}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */


function t3(event) {
    let result;
    if (event.keyCode > 57) {
        result = true
    } else if (event.keyCode >= 47 && event.keyCode <= 57) {
        result = false
    }
    toOut(3, result)
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */
let i4 = document.querySelector('.i-4');
let str4 = ''
function t4(event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        return false
    } else {
        str4 += event.key
    }

    toOut(4, str4)

}

i4.onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let i5 = document.querySelector('.i-5');
let str2 = '';
function t5(event) {
    str2 += event.key.toUpperCase();

    toOut(5, str2);
}

i5.onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */
let i6 = document.querySelector('.i-6');
let str3 = '';
function t6(event) {
    if (event.key === event.key.toLowerCase()) {
        str += event.key;
        i6.value = str;
        console.log(i6.value)
    }
    return false;
}

i6.onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

let i7 = document.querySelector('.i-7');
const a7 = ['a', 'z', 'x', 'w', 'y', 't'];
let str7 = '';

function t7() {
    index = Math.floor(Math.random() * a7.length);
    str7 += a7[index];
toOut(7, str7)
}

i7.onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let i8 = document.querySelector('.i-8')
let str8 = '';
const a8 = {
    i: 1,
    o: 0,
    l: 7
}

function t8(event) {
    let key = event.key;

    if (a8[key] !== undefined) {
        str8 += a8[key]
    } else {
        str8 += key;
    }
    toOut(8, str8)
}

i8.onkeydown = t8;

// 1. Получаем из event введенный символ
// 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
// 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.




// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */
let i9 = document.querySelector('.i-9')
let count = 0;

function t9(event) {
    console.log(event.keyCode)
    if (event.keyCode == 40) {
        count++;
    }
    toOut(9, count)
}

i9.onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;
let block10 = document.querySelector('.block-10');

function t10(event) {
    let x = event.keyCode;
    if (x == 40 || x == 38) {
        h++;
        block10.style.height = `${h}px`;


    } else if (x == 39 || x == 37) {
        w++;
        block10.style.width = `${w}px`;

    }
    // увеличиваем  h, w, потом присваиваем как свойства...

}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/
let i11 = document.querySelector('.i-11');
let keyboard = document.querySelectorAll('.keyboard')

function t11(event) {

    // console.log(event.key);

    keyboard.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
    });

    keyboard.forEach(el => {
        if (el.attributes.data.value == event.key) {
            el.classList.add('active');
        }

    })

}

i11.onkeydown = t11;

