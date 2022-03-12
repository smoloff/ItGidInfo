function toOut(a, b) {
    document.querySelector(`.out-${a}`).innerHTML = b;
}
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1(event) {
    toOut(1, 'touch')
}
let div1 = document.querySelector('.div-1');
div1.addEventListener('touchstart', t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let div2 = document.querySelector('.div-2');
let x2 = 0;

function t2(event) {
    console.log('touch');
    x2++;
    toOut(2, x2)
}

div2.addEventListener('touchstart', t2)



// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let div31 = document.querySelector('.div-3_1');
let div32 = document.querySelector('.div-3_2');


function t3(event) {
    if (event.path[0].classList.contains('div-3_1')) {
        toOut(3, 1)
    } else {
        toOut(3, 2)
    }

}

div31.addEventListener('touchstart', t3);
div32.addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let div4 = document.querySelector('.div-4');
let b4 = document.querySelector('.b-4')

function t4() {
    div4.ontouchstart = function t4_1() {
        console.log('works')
        toOut(4, this.innerHTML)
    }
}
b4.addEventListener('click', t4)


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
b5 = document.querySelector('.b-5');

function t5() {
    console.log(this)
    div4.ontouchstart = null;

}
b5.onclick = t5

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    toOut(6, 'touchend')
}
div4.ontouchend = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
function t7() {
    this.style.background = 'red'
}
let div7 = document.querySelector('.div-7')
div7.addEventListener('touchstart', t7)


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    let num = Math.floor(Math.random() * 6);
    this.style.background = a8[num]
}
let div8 = document.querySelector('.div-8');
div8.ontouchstart = t8;


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {

    toOut(9, event.touches.length)
}

document.querySelector('.div-9').ontouchstart = t9;


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10');
let w = div10.offsetWidth;
function t10() {
    w++;
    div10.style.width = `${w}px`
}

div10.ontouchmove = t10;

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {

    // console.log(event.targetTouches[0].radiusX)
    // console.log(event.targetTouches[0].radiusX)
    let str = `radiusX: ${Math.floor(event.targetTouches[0].radiusX)}, radiusY: ${Math.floor(event.targetTouches[0].radiusY)}`;

    toOut(11, str)

}
document.querySelector('.div-11').ontouchstart = t11;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let bigImg = document.querySelector('.div-12-max img');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function bigImageChange(count) {
    bigImg.src = images[count].src;    
}

function removeActive(count) {
    images.forEach(el => {
        if (el.classList.contains('active-img')) {
            el.classList.remove('active-img');
        }
    })
    images[count].classList.add('active-img');

    bigImageChange(count)

}

function nextFunction() {

    count++;

    if (count == images.length) {
        count = 0;
    }

    removeActive(count);
}

function prevFunction() {
    count--;

    if (count < 0) {
        count = (images.length - 1);
    }

    removeActive(count);
}

function resetFunction() {
    count = 0;

    removeActive(count);
}
