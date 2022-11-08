'use strict';

let fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }

    return 'пятая буква вашего имени:' + name[4] + '.';
}

console.log(fifthLetter('ник'))