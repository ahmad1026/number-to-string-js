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
        toString = (changeToString(result[0]) === '') ? 'صفر' : changeToString(result[0]);
        break;
    case 2:
        if (changeToString(result[1]) === '') {
            toString = changeToString(result[0]) + '  هزار  ';
        } else {
            toString = changeToString(result[0]) + ' هزار و  ' + changeToString(result[1]);
        }
        break;
    case 3:
        if (changeToString(result[1]) === '' && changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' میلیون '

            //7.365.256
        } else if (changeToString(result[1]) === '') {
            toString = changeToString(result[0]) + ' میلیون و ' + changeToString(result[2]);
        } else if (changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' میلیون و ' + changeToString(result[1]) + ' هزار  '
        } else {
            toString = changeToString(result[0]) + ' میلیون و ' + changeToString(result[1]) + ' هزار  ' + changeToString(result[2]);
        }
        break;
    case 4://1-2/1-3/2-3
        if (changeToString(result[1]) === '' && changeToString(result[2]) === '' && changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' میلیارد '
        } else if (changeToString(result[1]) === '' && changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[3])
        } else if (changeToString(result[1]) === '' && changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[2]) + ' هزار '
        } else if (changeToString(result[2]) === '' && changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[1]) + ' میلیون ';
        } else if (changeToString(result[3]) === '') {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[1]) + ' میلیون و ' + changeToString(result[2]) + ' هزار ';
        } else if (changeToString(result[2]) === '') {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[1]) + ' میلیون و ' + changeToString(result[3])
        } else if (changeToString(result[1]) === '') {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[2]) + ' هزار و  ' + changeToString(result[3]);
        } else {
            toString = changeToString(result[0]) + ' میلیارد و ' + changeToString(result[1]) + ' میلیون و  ' + changeToString(result[2]) + ' هزار و ' + changeToString(result[3]);

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
        '0': "صفر",
        '000': "",
        '1': "یک",
        '2': "دو",
        '3': "سه",
        '4': "چهار",
        '5': "پنج",
        '6': "شش",
        '7': "هفت",
        '8': "هشت",
        '9': "نه",
        '10': "ده",
        '11': "یازده",
        '12': "دوازده",
        '13': "سیزده",
        '14': "چهارده",
        '15': "پانزده",
        '16': "شانزده",
        '17': "هفده",
        '18': "هجده",
        '19': "نوزده",
        '20': "بیست",
        '30': "سی",
        '40': "چهل",
        '50': "پنجاه",
        '60': "شصت",
        '70': "هفتاد",
        '80': "هشتاد",
        '90': "نود",
        '100': "صد",
        '200': "دویست",
        '300': "سیصد",
        '400': "چهارصد",
        '500': "پانصد",
        '600': "ششصد",
        '700': "هفتصد",
        '800': "هشتصد",
        '900': "نهصد",
    }//7.032.569
    if (!!constants[str])
        return constants[str];
    switch (arry.length) {
        case 2:
            return constants[arry[0] + '0'] + ' و ' + constants[arry[1]];
        case 3:
            if (arry[0] === '0' && arry[1] === '0' && arry[2] === '0') {
                return '';
            } else if (arry[0] === '0' && arry[1] === '0') {
                return constants[arry[2]];
            } else if (arry[0] === '0' && arry[2] === '0') {
                return constants[arry[1] + '0'];
            } else if (arry[0] === '0') {
                return constants[arry[1] + '0'] + ' و  ' + constants[arry[2]];
            } else if (arry[1] === '0') {
                return constants[arry[0] + '00'] + ' و ' + constants[arry[2]]
            }
            else if (!!constants[arry[1] + arry[2]]) {
                return constants[arry[0] + '00'] + ' و ' + constants[arry[1] + arry[2]]
            }
            return constants[arry[0] + '00'] + ' و ' + constants[arry[1] + '0'] + ' و ' + constants[arry[2]];
    }

}






