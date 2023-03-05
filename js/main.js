// let x = parseInt(prompt(`Number`));
// let color = prompt('Enter color', '515151');
// let text = 'Heading';
// sum = x + 10;

// document.write(`<h3 style="color: #${color}">${text}, ${sum}</h3>`);


// S = +234.65125411.toFixed(1);
// console.log(S);

// result = 20*'30'+'100'*2;
// console.log(result);

// x = 30;
// y = 20;

// if(x < y) {
//     console.log(`Yes, ${x} < ${y}.`);
//     result = x+y;
// } else {
//     console.log(`NO, ${x} > ${y}.`);
//     result = x*y;
// }

// console.log(result);



// let userAge = +prompt("Enter your age", 18);
// if (userAge <= 17) {
//     alert("Go back soon");
// } else {
//     alert("Welcome to the club");
// }

// let firstNumber = prompt('enter number', 1);
// let secondNumber = +prompt('enter number', 1);

// if (firstNumber == secondNumber) {
//     console.log('yes')
// } else {
//         console.log('no')
//     }

// if (firstNumber === secondNumber) {
//         console.log('yes')
//     } else {
//             console.log('no')
//         }

// заполнение массива случайными числами

let n = 0;
let i, j;

while(isNaN(n)) || (n < 1){
    n = +prompt('Enter length of arr')
}

let arr = [];

for (i = 0; i < n; i++) {
    arr[i] = [];
    console.log(arr[i])
}