
const auth = 'auth=7859d9d42a8834141d529577207c9596';
let xhhp = new XMLHttpRequest();


function buttonActivate(x, y) {
    let bx = document.querySelector(`.b-${x}`);
    bx.addEventListener('click', y);
}

function toOut(a, b) {
    document.querySelector(`.out-${a}`).innerHTML = b;
}

// object to query string
function objToStr(obj) {
    let str = new URLSearchParams(obj).toString();
    return str;
}

function megaFunc(outNum, queryParams, getPost) {

    let params = objToStr(queryParams);

    if (getPost == undefined) getPost = 'GET';


    xhhp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            toOut(outNum, this.responseText)
        }
    }

    xhhp.open(`${getPost}`, `http://getpost.itgid.info/index2.php?${auth}&${params}`, true);
    xhhp.send()

}


// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
    let query = {
        action: 1,
    }

    megaFunc(1, query);
}

buttonActivate(1, t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {

    let query = {
        action: 2,
        name: 'Pavlo'
    }

    megaFunc(2, query);

}

buttonActivate(2, t2);

// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {

    let query = {
        action: 3,
        num1: 5,
        num2: 10
    }

    megaFunc(3, query);

}

buttonActivate(3, t3);

// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let query = {
        action: 4,
        num1: 2,
        num2: 9
    }

    megaFunc(4, query);

}
buttonActivate(4, t4);



// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let query = {
        action: 5,
    }

    megaFunc(5, query);

}
buttonActivate(5, t5);

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {

    let query = {
        action: 6,
        num1: 0,
        num2: 9
    }

    megaFunc(6, query);

}

buttonActivate(6, t6);


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let query = {
        action: 7
    }

    megaFunc(7, query);

}

buttonActivate(7, t7);

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let query = {
        action: 8,
        year: 1987
    }

    megaFunc(8, query);

}

buttonActivate(8, t8);


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {

    let query = {
        action: 9,
        m: 1,
        d: 1,
        y: 1
    }

    megaFunc(9, query);

}

buttonActivate(9, t9);

// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let query = {
        action: 1
    }

    megaFunc(10, query, 'POST');

}

buttonActivate(10, t10);

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {

    let query = {
        action: 2,
        name: 'Pavlo'
    }

    megaFunc(11, query, 'POST');

}

buttonActivate(11, t11);

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    let query = {
        action: 3,
        num1: 3,
        num2: 3
    }
    megaFunc(12, query, 'Post');

}

buttonActivate(12, t12);


// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {

    let query = {
        action: 4,
        num1: 1,
        num2: 10
    }

    megaFunc(13, query, 'POST');
}

buttonActivate(13, t13);


// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    let query = {
        action: 5
    }

    megaFunc(14, query, 'POST');

}

buttonActivate(14, t14)

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {

    let query = {
        action: 6,
        num1: 1,
        num2: 5
    }

    megaFunc(15, query, 'POST');

}

buttonActivate(15, t15);


// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

    let query = {
        action: 7
    }

    megaFunc(16, query, 'POST');
}

buttonActivate(16, t16);

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

    let query = {
        action: 8,
        year: 1987
    }

    megaFunc(17, query, 'POST');
}

buttonActivate(17, t17);


// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

    let query = {
        action: 9,
        m: 1,
        d: 1,
        y: 1
    }

    megaFunc( 18, query, 'POST');
}

buttonActivate(18, t18);

// ваше событие здесь!!!

