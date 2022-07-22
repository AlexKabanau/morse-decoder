const MORSE_TABLE = {
    '.-':     'a',//0000001011
    '-...':   'b',//0011101010
    '-.-.':   'c',//0011101110
    '-..':    'd',//0000111010
    '.':      'e',//0000000010
    '..-.':   'f',//0010101110
    '--.':    'g',//0000111110
    '....':   'h',//0010101010
    '..':     'i',//0000001010
    '.---':   'j',//0010111111
    '-.-':    'k',//0000111011
    '.-..':   'l',//0010111010
    '--':     'm',//0000001111
    '-.':     'n',//0000001110
    '---':    'o',//0000111111
    '.--.':   'p',//
    '--.-':   'q',//
    '.-.':    'r',//
    '...':    's',//
    '-':      't',//
    '..-':    'u',//
    '...-':   'v',//
    '.--':    'w',//
    '-..-':   'x',//
    '-.--':   'y',//
    '--..':   'z',//
    '.----':  '1',//
    '..---':  '2',//
    '...--':  '3',//
    '....-':  '4',//
    '.....':  '5',//
    '-....':  '6',//
    '--...':  '7',//
    '---..':  '8',//
    '----.':  '9',//
    '-----':  '0',//
};

function decode(expr) {

    let slice = [];
    let DashesAndDots = [];
    let code = [];
    let length10 = expr.length/10;
    
    let x = [];
    let v = [];
    // let y = [];
    let letters = [];
    let letter = [];
    for (let i=0; i<length10; i++) {
        slice[i] = expr.slice(10*i, 10*(i+1));

        let j=0;
        code[i] = slice[i].split('');
        while (code[i][j]==='0') {
            
            code[i].splice(j,1);
            // letters[i].join('');
            // j++;
        }
        
        x = code[i].join('');
       
        // console.log(x);
        y = [];
        
        for (let j=0; j<((x.length) / 2); j++) {
            
            y[j] = (x.slice(2*j, 2*(j+1)));
            // console.log('j = ' + j+ '   y[j] =' + y[j]);
        }
        // console.log(y);
        v.push(y);
        // console.log(v);
    }
    // console.log('DashesAndDots0:');
    // console.log(DashesAndDots);
    
    for (let i=0; i<v.length; i++) {
        letters = [];
        for (let j = 0; j<v[i].length; j++) {
            // 
            if (v[i][j] == '10') {
                letters[j] = '.';
                } else if (v[i][j] == '11') {
                letters[j] = '-';
                } else  {
                letters[j] = ' ';
            };

            // console.log('i= ' + i + '; j = ' + j+ ';   v[i][j] = ' + v[i][j] + ';  letters[j] = ' + letters[j] + '   letters = ' + letters);
        };
        // console.log('DashesAndDots1:');
        // console.log(DashesAndDots);
        // console.log('letters:');
        // console.log(letters);
        DashesAndDots.push(letters);
        // console.log('DashesAndDots:');
        // console.log(DashesAndDots);
    // v.forEach((element) => {
        
                // else (code.push('00'));
    };
    letters = [];
    for (let i=0; i<DashesAndDots.length; i++) {
        letters[i] = DashesAndDots[i].join('');

        
    //     // console.log('DashesAndDots1:');
    //     // console.log(DashesAndDots);
    //     console.log('letters:');
    //     console.log(letters);
    //     DashesAndDots.push(letters);
    //     console.log('DashesAndDots:');
    //     console.log(DashesAndDots);
    // // v.forEach((element) => {
        
    //             // else (code.push('00'));
    }
    // console.log('letters:');
    // console.log(letters);

    letter = [];

    for (let item in letters) {
        if (MORSE_TABLE[letters[item]]) {
            letter.push(MORSE_TABLE[letters[item]]);
        } else {letter.push(' ')};
    }

    return letter.join('');

        
    

        
}

    // let arr = expr.split('');
    // let answer = [];

    // for (let item in arr) {
    //     for (let key in MORSE_TABLE) {
    //         if (MORSE_TABLE[key] == arr[item]) {
    //           answer.push(key);
    //         }
    //       }
    // }

    // let code = [];

    // for (let i=0; i<answer.length; i++) {
    //     console.log(answer[i]);
    //     let array = answer[i].split('');
    //     if (array.length<5) {
    //         let length = array.length;
    //         console.log('!!+++!! ' + array + ' ' + array.length);
    //         for (let k=0; k<(5-length); k++) {
    //             console.log('!')
    //             array.unshift('+');
    //         };
    //         console.log(array);
    //     };
    //     for (let j=0; j<array.length; j++) {
    //         if (array[j] == '.') {
    //             code.push('10');
    //         } else if (array[j] == '-') {
    //             code.push('11');
    //         } else if (array[j] == '*') {
    //             code.push('*')
    //         } else (code.push('00'));
    //     }
    // }

    // return code.join('');
    
    // write your solution here
// }

module.exports = {
    decode
}