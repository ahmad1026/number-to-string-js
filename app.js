let number = +prompt("enter a number:");
let stringNumber = number.toString();
let result = [];
let counter = stringNumber.length % 3;
let toString = '';///    =====================>is pesion  
let toStringE = '';/// =======================> is english


//if Do => separated 3 number from right
if (counter === 0) {
    for (let index = 0; index < stringNumber.length;) {
        result.push(stringNumber.slice(index, index += 3));
    }
} else {
    result.push(stringNumber.slice(0, counter));
    for (let index = counter; index < stringNumber.length;) {
        result.push(stringNumber.slice(index, index += 3));
    }
}
//////////////////////////////////************switch for english ******************************************* */


switch (result.length) {
    case 1:
        toStringE = changeToStringE(result[0]);
        break;
    case 2:
        if (changeToStringE(result[1]) === '') {
            toStringE = changeToStringE(result[0]) + ' thousand ';
        } else {
            toStringE = changeToStringE(result[0]) + ' thousand and ' + changeToStringE(result[1]);
        }
        break;
    case 3:
        if (changeToString(result[1]) === '' && changeToString(result[2]) === '') {
            toStringE = changeToStringE(result[0]) + ' milion '
        } else if (changeToString(result[1]) === '') {
            toStringE = changeToStringE(result[0]) + ' milion and ' + changeToStringE(result[2])
        } else if (changeToString(result[2]) === '') {
            toStringE = changeToStringE(result[0]) + ' milion and ' + changeToStringE(result[1]) + ' thousand '
        } else {
            toStringE = changeToStringE(result[0]) + ' milion and ' + changeToStringE(result[1]) + ' thousand and ' + changeToStringE(result[2])
        }
        break;
    case 4:
        if (changeToStringE(result[1]) === '' && changeToStringE(result[2]) === '' && changeToStringE(result[3]) === '') {
            toStringE = changeToStringE(result[0]) + ' bilion '
        } else if (changeToStringE(result[1]) === '' && changeToStringE(result[2]) === '') {
            toStringE = changeToStringE(result[0]) + '  bilion and ' + changeToStringE(result[3])
        } else if (changeToStringE(result[1]) === '' && changeToStringE(result[3]) === '') {
            toStringE = changeToStringE(result[0]) + '  bilion and ' + changeToStringE(result[2]) + ' thousand '
        } else if (changeToStringE(result[2]) === '' && changeToStringE(result[3]) === '') {
            toStringE = changeToStringE(result[0]) + '  bilion and ' + changeToStringE(result[1]) + ' milion ';
        } else if (changeToStringE(result[3]) === '') {
            toStringE = changeToStringE(result[0]) + '  bilion and ' + changeToStringE(result[1]) + '  milion and ' + changeToStringE(result[2]) + ' thousand ';
        } else if (changeToStringE(result[2]) === '') {
            toStringE = changeToStringE(result[0]) + '  bilion and ' + changeToStringE(result[1]) + ' milion and ' + changeToStringE(result[3])
        } else if (changeToStringE(result[1]) === '') {
            toStringE = changeToStringE(result[0]) + ' bilion and ' + changeToStringE(result[2]) + ' thousand and ' + changeToStringE(result[3]);
        } else {
            toStringE = changeToStringE(result[0]) + ' bilion and ' + changeToStringE(result[1]) + ' milion and  ' + changeToStringE(result[2]) + ' thousand and ' + changeToStringE(result[3]);

        }

}

//////////////////////////////////************switch for persion ******************************************* */
switch (result.length) {
    case 1:
        toString = (changeToString(result[0]) === '') ? '??????' : changeToString(result[0]);
        break;
    case 2:
        if (changeToString(result[1]) === '') {
            toString = changeToString(result[0]) + '  ????????  ';
        } else {
            toString = changeToString(result[0]) + ' ???????? ??  ' + changeToString(result[1]);
        }
        break;
    case 3:
        if (changeToString(result[1]) === '' && changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' ???????????? '

            //7.365.256
        } else if (changeToString(result[1]) === '') {
            toString = changeToString(result[0]) + ' ???????????? ?? ' + changeToString(result[2]);
        } else if (changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' ???????????? ?? ' + changeToString(result[1]) + ' ????????  '
        } else {
            toString = changeToString(result[0]) + ' ???????????? ?? ' + changeToString(result[1]) + ' ????????  ' + changeToString(result[2]);
        }
        break;
    case 4://1-2/1-3/2-3
        if (changeToString(result[1]) === '' && changeToString(result[2]) === '' && changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? '
        } else if (changeToString(result[1]) === '' && changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[3])
        } else if (changeToString(result[1]) === '' && changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[2]) + ' ???????? '
        } else if (changeToString(result[2]) === '' && changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[1]) + ' ???????????? ';
        } else if (changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[1]) + ' ???????????? ?? ' + changeToString(result[2]) + ' ???????? ';
        } else if (changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[1]) + ' ???????????? ?? ' + changeToString(result[3])
        } else if (changeToString(result[1]) === '') {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[2]) + ' ???????? ??  ' + changeToString(result[3]);
        } else {
            toString = changeToString(result[0]) + ' ?????????????? ?? ' + changeToString(result[1]) + ' ???????????? ??  ' + changeToString(result[2]) + ' ???????? ?? ' + changeToString(result[3]);

        }
}


////////////////////////**************************outPuts */
alert(`your number is ==> ${number}
**English word is => ${toStringE} 
**Persion word is => ${toString}`)

/***********************************************functions */

/**********************************************English function  */
function changeToStringE(str) {
    let arry = str.split('');
    const constants = {
        '0': "zero",
        '000': "",
        '1': "one",
        '2': "two",
        '3': "three",
        '4': "four",
        '5': "five",
        '6': "six",
        '7': "seven",
        '8': "eight",
        '9': "nine",
        '10': "ten",
        '11': "eleven",
        '12': "twelve",
        '13': "thirteen",
        '14': "fourteen",
        '15': "fifteen",
        '16': "sixteen",
        '17': "seventeen",
        '18': "eighteen",
        '19': "ninteen",
        '20': "twenty",
        '30': "thirty",
        '40': "fourty",
        '50': "fifty",
        '60': "sixty",
        '70': "seventy",
        '80': "eighty",
        '90': "ninty",
    }
    if (!!constants[str])
        return constants[str];
    switch (str.length) {
        case 2:
            return constants[arry[0] + '0'] + ' ' + constants[arry[1]];
        case 3:
            if (arry[0] === '0' && arry[1] === '0' && arry[2] === '0') {
                return '';
            } else if (arry[0] === '0' && arry[1] === '0') {
                return constants[arry[2]];
            } else if (arry[0] === '0' && arry[2] === '0') {
                return constants[arry[1] + '0'];
            } else if (arry[1] === '0' && arry[2] === '0') {
                return constants[arry[0]] + ' hundred '
            } else if (arry[0] === '0') {
                return constants[arry[1] + '0'] + ' ' + constants[arry[2]];
            } else if (arry[1] === '0') {
                return constants[arry[0]] + ' hundred ' + constants[arry[2]];
            } else if (!!constants[arry[1] + arry[2]]) {
                return constants[arry[0]] + ' hundred ' + constants[arry[1] + arry[2]]
            }
            return constants[arry[0]] + ' hundred ' + constants[arry[1] + '0'] + ' ' + constants[arry[2]];
    }
}
/*****************************************************persion function */
function changeToString(str) {//['7']
    let arry = str.split('');
    const constants = {
        '0': "??????",
        '000': "",
        '1': "????",
        '2': "????",
        '3': "????",
        '4': "????????",
        '5': "??????",
        '6': "????",
        '7': "??????",
        '8': "??????",
        '9': "????",
        '10': "????",
        '11': "??????????",
        '12': "????????????",
        '13': "??????????",
        '14': "????????????",
        '15': "????????????",
        '16': "????????????",
        '17': "????????",
        '18': "????????",
        '19': "??????????",
        '20': "????????",
        '30': "????",
        '40': "??????",
        '50': "??????????",
        '60': "??????",
        '70': "??????????",
        '80': "??????????",
        '90': "??????",
        '100': "????",
        '200': "??????????",
        '300': "????????",
        '400': "????????????",
        '500': "??????????",
        '600': "????????",
        '700': "??????????",
        '800': "??????????",
        '900': "????????",
    }//7.032.569
    if (!!constants[str])
        return constants[str];
    switch (arry.length) {
        case 2:
            return constants[arry[0] + '0'] + ' ?? ' + constants[arry[1]];
        case 3:
            if (arry[0] === '0' && arry[1] === '0' && arry[2] === '0') {
                return '';
            } else if (arry[0] === '0' && arry[1] === '0') {
                return constants[arry[2]];
            } else if (arry[0] === '0' && arry[2] === '0') {
                return constants[arry[1] + '0'];
            } else if (arry[0] === '0') {
                return constants[arry[1] + '0'] + ' ??  ' + constants[arry[2]];
            } else if (arry[1] === '0') {
                return constants[arry[0] + '00'] + ' ?? ' + constants[arry[2]]
            }
            else if (!!constants[arry[1] + arry[2]]) {
                return constants[arry[0] + '00'] + ' ?? ' + constants[arry[1] + arry[2]]
            }
            return constants[arry[0] + '00'] + ' ?? ' + constants[arry[1] + '0'] + ' ?? ' + constants[arry[2]];
    }

}






