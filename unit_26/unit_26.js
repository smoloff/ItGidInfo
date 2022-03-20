let www = 'http://getpost.itgid.info/index2.php';

let authKey = 'auth=7859d9d42a8834141d529577207c9596';

function buttonActivate(x, y) {
    let bx = document.querySelector(`.b-${x}`);
    bx.addEventListener('click', y);
}

// преобразование обьекта и ключа авторизации в query строку
function objToStr(obj) {
    let str = `?${authKey}&`;
    str += new URLSearchParams(obj).toString();
    str = `${www}${str}`;
    return str;
}
function objToStrPost(obj) {
    let str = `${authKey}&`
    str += new URLSearchParams(obj).toString();
    return str;
}

function toOut(num, str) {
    let out = document.querySelector(`.out-${num}`);
    out.innerHTML = str;
}

function toFetchAndOut(query, output) {
    let request = objToStr(query)
    fetch(request)
        .then(data => {
            return data.text();
        })
        .then(data => toOut(output, data))
}

function toFetchPostandOut(query, output) {
    let request = objToStrPost(query);
    console.log(request)
    fetch(www, {
        method: 'POST',
        headers: {
            //   'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: request
    })
        .then(data => data.text())
        .then(data => toOut(output, data))
}
// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
    let query = {
        action: 1,
    }

    toFetchAndOut(query, 1);

}

buttonActivate(1, t1);

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let query = {
        action: 2,
        name: 'pavlo'
    }

    toFetchAndOut(query, 2);
}

buttonActivate(2, t2);



// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let query = {
        action: 3,
        num1: 2,
        num2: 7
    }

    toFetchAndOut(query, 3);
}

buttonActivate(3, t3);



// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let query = {
        action: 4,
        num1: 10,
        num2: 5
    }

    toFetchAndOut(query, 4)

}

buttonActivate(4, t4);

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let query = {
        action: 5
    }

    toFetchAndOut(query, 5);
}

buttonActivate(5, t5)

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let query = {
        action: 6,
        num1: 5,
        num2: 15
    }

    toFetchAndOut(query, 6);
}

buttonActivate(6, t6)


// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let query = {
        action: 7
    }

    toFetchAndOut(query, 7)

}

buttonActivate(7, t7)


// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let query = {
        action: 8,
        year: 1987
    }

    toFetchAndOut(query, 8)

}

buttonActivate(8, t8)


// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {

    let query = {
        action: 9,
        m: 1,
        d: 1,
        y: 1
    }

    toFetchAndOut(query, 9)

}

buttonActivate(9, t9)

// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let query = {
        action: 1
    }

    toFetchPostandOut(query, 10)
}
buttonActivate('10', t10);


// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {

    let query = {
        action: 2,
        name: 'Pavlo'
    }

    toFetchPostandOut(query, 11)
}
buttonActivate(11, t11);

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {

    let query = {
        action: 3,
        num1: 3,
        num2: 10
    }

    toFetchPostandOut(query, 12)
}
buttonActivate(12, t12);

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {

    let query = {
        action: 4,
        num1: 3,
        num2: 10
    }

    toFetchPostandOut(query, 13)
}
buttonActivate(13, t13);

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {

    let query = {
        action: 5
    }

    toFetchPostandOut(query, 14)
}
buttonActivate(14, t14);

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {

    let query = {
        action: 6,
        num1: 3,
        num2: 10
    }

    toFetchPostandOut(query, 15)
}
buttonActivate(15, t15);

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

    let query = {
        action: 7,

    }

    toFetchPostandOut(query, 16)
}
buttonActivate(16, t16);

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

    let query = {
        action: 8,
        year: 1987
    }

    toFetchPostandOut(query, 17)
}
buttonActivate(17, t17);

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

    let query = {
        action: 9,
        m: 1,
        d: 1,
        y: 1
    }

    toFetchPostandOut(query, 18)

}

buttonActivate(18, t18);


