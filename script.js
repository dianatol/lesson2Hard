'use strict'
function myFunc(arg) {
    if (typeof arg !== 'string') {
        return "Введите строку"
    }
    if(arg.length > 30) {
        return arg.slice(0, 30) + '...';
}
    return arg;
}

console.log(myFunc('452525443'))