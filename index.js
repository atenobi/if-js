// let user = 'John Doe'
// console.log(user)
//
// const student = 'Max'
// console.log(student)
//
// user = student
// console.log(user)
//
// let test = 1
// console.log(test++)
// // 2 number + number
// console.log(test + '1')
// // '21' number + 'string'
// console.log(test--)
// // 2 'string' - number
// console.log(test - 1)
// // 0 number - number
// console.log(Boolean(test))
// // true
//
// // сумма элементов массива вариант 1
// const massiveNum = [2, 3, 5, 8]
// let result = 0
// for (let i = 0; i < massiveNum.length; i++) {
//   result += massiveNum[i]
// }
//
// console.log(result)
// // 18
//
// // сумма элементов массива вариант 2
// const massNum = [2, 3, 5, 8]
// const result2 = massNum.reduce((sum, current) => sum + current, 0)
// console.log(result2) // 18
//
// const massiveTest2 = [2, 5, 8, 15, 0, 6, 20, 3]
// for (let i = 0; i < massiveTest2.length; i++) {
//   if (massiveTest2[i] > 5 && massiveTest2[i] < 10) {
//     console.log(massiveTest2[i])
//   }
// }
// // 8, 6
//
// const massiveTest3 = [2, 5, 8, 15, 0, 6, 20, 3]
// for (let i = 0; i < massiveTest3.length; i++) {
//   if (!(massiveTest3[i] % 2)) {
//     console.log(massiveTest3[i])
//   }
// }
// // 2, 8, 0, 6, 20

// function palindromeTest (word) {
//   let palindromeCheck
//   const wordReverse = word.split('').reverse().join('')
//   if (word === wordReverse) {
//     palindromeCheck = true
//   } else {
//     palindromeCheck = false
//   }
//   console.log(palindromeCheck)
// }
//
// palindromeTest(prompt('insert word', ''))

// const userInsert = document.getElementById('palindrome_input');
// userInsert.addEventListener('input', function () {isPalindrome()});
//
// const palindromeOutput = document.getElementById('palindrome_output');
//
// const isPalindrome = function () {
// 	const insert = userInsert.value.toLowerCase();
// 	const reverseInsert = userInsert.value.toLowerCase().split('').reverse().join('');
//
// 	insert === reverseInsert ? palindromeOutput.innerHTML = 'палиндром' : palindromeOutput.innerHTML = 'не палиндром';
//  }

// function minValue (a, b) {
//   if (a > b) {
//     return b
//   } else {
//     return a
//   }
// }
//
// console.log(minValue(15, 41))

// function maxValue (a, b) {
//   if (a < b) {
//     return b
//   } else {
//     return a
//   }
// }
//
// console.log(maxValue(9, 14))

// const ternMaxValue = (a, b) => a > b ? console.log(a) : console.log(b)
//
// ternMaxValue(14, 85)

// // выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).

// const arrTest4 = [70, 5, 34, 0, 5, 10, 47, 60, 6, 0]
//
// const changeArr4 = arrTest4.map(function toZero (num) {
//   if (!(num % 10)) {
//     return num / 10 + 'zero'
//   } else if (num === 0) {
//     return 'zero';
//   } else if (num) {
//     return num;
//   }
// });
//
// console.log(changeArr4)

// const Array2 = [0, 9, 28, 50, 1000, 60, 6, 4, 70, 100]
//
// for (let i = 0; i < Array2.length; i++) {

//   if (!(Array2[i] % 10)) {
//     Array2[i] += '';
//     Array2[i] = Array2[i].replaceAll('0', 'zero');

//   if (!(Array2[i] % 10)) {
//     Array2[i] = (Array2[i] + '').replaceAll('0', 'zero');
//   }
// }
//
// console.log(Array2)

// function sum (a, b) {
//   return a + b
// }
//
// console.log(sum(7, 2))
//
// const sum2 = (a, b) => a + b
// console.log(sum2(5, 4))
//
// const sum3 = (a) => {
//   return (b) => {
//     return a + b
//   }
// }
//
// console.log(sum3(5)(2))

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const Text1EL = document.getElementById('text1');
// const Text2EL = document.getElementById('text2');
// const Text3EL = document.getElementById('text3');
// const Text4EL = document.getElementById('text4');
//
// let indexColor = 0;
//
// function changeColor (a) {
//   a.style.color = colors[indexColor++ % colors.length];
// }
//
// Text1EL.addEventListener('click', function () { changeColor(Text1EL); });
// Text2EL.addEventListener('click', function () { changeColor(Text2EL); });
// Text3EL.addEventListener('click', function () { changeColor(Text3EL); });
// Text4EL.addEventListener('click', function () { changeColor(Text4EL); });

const colors1 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const TextEL = document.querySelectorAll('p.test_text');

const changeColor = (e) => {
	let I = 0;
	return function () {
		return colors1[I++];

	}
}
for (let i = 0; i < TextEL.length; i++) {
	TextEL[i].addEventListener('click', changeColor);
}

// const divs = document.querySelectorAll('div');
//
// const callBack = (e) => {
// 	console.log(e.target.style);
// 	e.target.style.backgroundColor = 'green';
// };
//
// for (let i = 0; i < divs.length; i++) {
// 	divs[i].addEventListener('click', callBack);
// }

// const date = '2021-09-15';
//
// const euroDate = date.split('-').reverse().join('.');
// console.log(euroDate);

// const data = [
// 	{
// 		country: 'Russia',
// 		city: 'Saint Petersburg',
// 		hotel: 'Hotel Leopold'
// 	},
// 	{
// 		country: 'Spain',
// 		city: 'Santa Cruz de Tenerife',
// 		hotel: 'Apartment Sunshine'
// 	},
// 	{
// 		country: 'Slowakia',
// 		city: 'Vysokie Tatry',
// 		hotel: 'Villa Kunerad'
// 	},
// 	{
// 		country: 'Germany',
// 		city: 'Berlin',
// 		hotel: 'Hostel Friendship'
// 	},
// 	{
// 		country: 'Indonesia',
// 		city: 'Bali',
// 		hotel: 'Ubud Bali Resort&SPA'
// 	},
// 	{
// 		country: 'Netherlands',
// 		city: 'Rotterdam',
// 		hotel: 'King Kong Hostel'
// 	},
// 	{
// 		country: 'Marocco',
// 		city: 'Ourika',
// 		hotel: 'Rokoko Hotel'
// 	},
// 	{
// 		country: 'Germany',
// 		city: 'Berlin',
// 		hotel: 'Hotel Rehberge Berlin Mitte'
// 	}
// ];
//
// const userSearch = document.getElementById('input_text');
//
// const outputText = document.getElementById('output_text')
//
// userSearch.addEventListener('input', function () {searchData(data)});
//
// function searchData (a) {
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i].country.toLowerCase() === userSearch.value.toLowerCase()
// 			|| a[i].city.toLowerCase() === userSearch.value.toLowerCase()
// 			|| a[i].hotel.toLowerCase() === userSearch.value.toLowerCase()
// 		) {
// 			outputText.innerHTML = `${a[i].country},  ${a[i].city},  ${a[i].hotel}`;
// 		}
// 	}
// }


