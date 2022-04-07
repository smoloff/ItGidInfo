let authKey = 'auth=7859d9d42a8834141d529577207c9596';

let web = 'http://getpost.itgid.info/index2.php';

function activeButton(x, y) {
    let button = document.querySelector(`.b-${x}`);
    button.onclick = y
}

function objToStr(obj) {
    let result = `?${authKey}&`;
    result += new URLSearchParams(obj).toString();
    result = `${web}${result}`
    return result;
}

function newPromise(url, method = "GET") {
    let promise = new Promise((resolve, reject) => {
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then(data => {
                resolve(data.text());
            })
            .catch(error => {
                reject(error)
            })

    })
    return promise
}



function toOut(arr, outNum) {
    let str = '';
    arr.forEach(element => {
        str += `${element}<br>`

    });
    document.querySelector(`.out-${outNum}`).innerHTML = str;
}

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {

    let query1 = {
        action: 1,
    }

    query1 = objToStr(query1)

    let query2 = {
        action: 2,
        name: 'pavlo'
    }

    query2 = objToStr(query2)

    let promise1 = newPromise(query1);
    let promise2 = newPromise(query2);

    Promise.all([promise1, promise2])
        .then(data => {
            console.log(data);
            toOut(data, 1)
        })
}


activeButton(1, t1)

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>
 
*/

function t2() {
    let query1 = {
        action: 3,
        num1: 5,
        num2: 10
    };

    let query2 = {
        action: 4,
        num1: 1,
        num2: 10
    }

    query1 = objToStr(query1);
    query2 = objToStr(query2);

    let p1 = newPromise(query1);
    let p2 = newPromise(query2);


    Promise.all([p1, p2])
        .then(data => toOut(data, 2))
}

activeButton(2, t2)


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let query1 = {
        action: 5
    }

    let query2 = {
        action: 6,
        num1: 5,
        num2: 15
    }

    query1 = objToStr(query1);
    query2 = objToStr(query2);

    let p1 = newPromise(query1);
    let p2 = newPromise(query2);

    Promise.all([p1, p2])
        .then(data => toOut(data, 3))

}

activeButton(3, t3)

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>
 
*/

function t4() {

    console.log('t4')
    let query1 = {
        action: 7,
    };

    let query2 = {
        action: 8,
        year: 1987
    };

    query1 = objToStr(query1);
    query2 = objToStr(query2);

    let promise1 = newPromise(query1);
    let promise2 = newPromise(query2);

    Promise.all([promise1, promise2])
        .then(data => toOut(data, 4))

}

activeButton(4, t4)



// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/




function t5() {

    let params1 = {
        action: 1
    };

    let params2 = {
        action: 2,
        name: 'Pavlo'
    }


    params1 = objToStr(params1);
    params2 = objToStr(params2)

    let promise1 = newPromise(params1, 'POST')
    let promise2 = newPromise(params2, 'POST')


    Promise.all([promise1, promise2])
        .then(data => toOut(data, 5))

}

activeButton(5, t5)


// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let params1 = {
        action: 3,
        num1: 10,
        num2: 20
    }

    let params2 = {
        action: 4,
        num1: 10,
        num2: 20
    }

    params1 = objToStr(params1);
    params2 = objToStr(params2);

    let promise1 = newPromise(params1, 'POST');
    let promise2 = newPromise(params2, 'POST');

    Promise.all([promise1, promise2])
        .then(data => toOut(data, 6))

}

activeButton(6, t6)


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>
 
*/

function t7() {

    let params1 = {
        action: 5
    }

    let params2 = {
        action: 6,
        num1: 5,
        num2: 15
    }

    params1 = objToStr(params1);
    params2 = objToStr(params2);

    let p1 = newPromise(params1, 'POST');
    let p2 = newPromise(params2, 'POST');

    Promise.all([p1, p2])
        .then(response => toOut(response, 7));
}

activeButton(7, t7)

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {

    let params1 = {
        action: 7
    };

    let params2 = {
        action: 8,
        year: 1987
    };

    params1 = objToStr(params1);
    params2 = objToStr(params2);

    let p1 = newPromise(params1, 'POST');
    let p2 = newPromise(params2, 'POST');

    Promise.all([p1, p2])
        .then(response => toOut(response, 8))

}

activeButton(8, t8)

