"use strict";

const colors = require('colors');

const [begin, end] = process.argv.slice(2);
let currentIndex = 0;

function simpleNumbers(beginRange, endRange) {
    let begin = +beginRange;
    let end = +endRange;

    if (checkErrors()) return false;

    createSimpleNumbers(begin, end);
}

function createSimpleNumbers(start, end) {
    let startPoint;

    if (begin <= 1) startPoint = 2
    else startPoint = begin;

    Loop:
    for (let i = startPoint; i < end; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue Loop;
            }
        }

        output(i);
    }

}

function output(number) {
    makeOutput(number, currentIndex);

    if (currentIndex !== 2) currentIndex++
    else currentIndex = 0;
}

function makeOutput(number, index) {
    switch (index) {
        case 1:
            console.log(colors.yellow(number));
            break;
        case 2:
            console.log(colors.red(number));
            break;
        default:
            console.log(colors.green(number));
    }
}

function checkErrors() {
    if (!begin || !end) {
        console.log(colors.red('Нет входных данных, укажите 2 входных параметра (целые числа) через пробел при запуске программы, пример: npm run hw1 1 100'));
        return true;
    }

    if (isNaN(begin)) {
        console.log(colors.red('Первый параметр не является числом'));
        return true;
    }

    if (isNaN(end)) {
        console.log(colors.red('Второй параметр не является числом'));
        return true;
    }

    if (end < begin) {
        console.log(colors.red('Конец диапазона не может быть меньше начала'));
        return true;
    }

    return false;
}


simpleNumbers(begin, end);

//lesson1