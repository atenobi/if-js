// let user = 'John Doe';
// //console.log(user);

// const student = 'Max';
// //console.log(student);

// user = student;
// //console.log(user);

// let test = 1;
// //console.log(test++);
// // 2 number + number
// //console.log(`${test}1`);
// // '21' number + 'string'
// //console.log(test--);
// // 2 'string' - number
// //console.log(test - 1);
// // 0 number - number
// //console.log(Boolean(test));
// // true

// сумма элементов массива вариант 1
// const massiveNum = [2, 3, 5, 8];
// let result = 0;
// for (let i = 0; i < massiveNum.length; i += 1) {
//   result += massiveNum[i];
// }
//
// //console.log(result);
// // 18

// // сумма элементов массива вариант 2
// const massNum = [2, 3, 5, 8];
// const result2 = massNum.reduce((sum, current) => sum + current, 0);
// //console.log(result2); // 18

// const massiveTest2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < massiveTest2.length; i += 1) {
//   if (massiveTest2[i] > 5 && massiveTest2[i] < 10) {
//     // console.log(massiveTest2[i]);
//   }
// }
// // 8, 6

// const massiveTest3 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < massiveTest3.length; i += 1) {
//   if (!(massiveTest3[i] % 2)) {
//     // console.log(massiveTest3[i]);
//   }
// }
// // 2, 8, 0, 6, 20

// function palindromeTest(word) {
//   let palindromeCheck;
//   const wordReverse = word.split('').reverse().join('');
//   if (word === wordReverse) {
//     palindromeCheck = true;
//   } else {
//     palindromeCheck = false;
//   }
//   //console.log(palindromeCheck);
// }
//
// palindromeTest(prompt('insert word', ''));

// const userInsert = document.getElementById('palindrome_input');
// const palindromeOutput = document.getElementById('palindrome_output');
//
// const isPalindrome = function () {
//   const insert = userInsert.value.toLowerCase();
//   const reverseInsert = userInsert.value.toLowerCase().split('').reverse().join('');
//
//   (reverseInsert === insert) ? palindromeOutput.innerHTML = 'палиндром'
//   : palindromeOutput.innerHTML = 'не палиндром';
// };
//
// userInsert.addEventListener('input', () => { isPalindrome(); });

// function minValue(a, b) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// }
//
// //console.log(minValue(15, 41));

// function maxValue(a, b) {
//   if (a < b) {
//     return b;
//   }
//   return a;
// }
//
// //console.log(maxValue(9, 14));

// const ternMaxValue = (a, b) => (a > b ? console.log(a) : console.log(b));
//
// ternMaxValue(14, 85);

// const ArrayZero = [0, 9, 28, 50, 1000, 60, 6, 4, 70, 100];
//
// for (let i = 0; i < ArrayZero.length; i += 1) {
//   if (!(ArrayZero[i] % 10)) {
//     ArrayZero[i] = (`${ArrayZero[i]}`).replaceAll('0', 'zero');
//   }
// }

// function sum(a, b) {
//   return a + b;
// }
//
// //console.log(sum(7, 2)); // 9

// const sum2 = (a, b) => a + b;
// //console.log(sum2(5, 4));

// const sum3 = (a) => (b) => a + b;
//
// //console.log(sum3(5)(2));

// const colorsVar1 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const Text1EL = document.getElementById('text1');
// const Text2EL = document.getElementById('text2');
// const Text3EL = document.getElementById('text3');
// const Text4EL = document.getElementById('text4');
//
// let indexColor = 0;
//
// function changeColor(textEl) {
//   textEl.style.color = colorsVar1[indexColor += 1 % colorsVar1.length];
// }
//
// Text1EL.addEventListener('click', () => { changeColor(Text1EL); });
// Text2EL.addEventListener('click', () => { changeColor(Text2EL); });
// Text3EL.addEventListener('click', () => { changeColor(Text3EL); });
// Text4EL.addEventListener('click', () => { changeColor(Text4EL); });

// const colorsVar2 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const TextEL = document.querySelectorAll('p.test_text');
//
// function changeColor1() {
//   let i = 0;
//   return (e) => {
//     e.target.style.color = colorsVar2[i++];
//     if (i > colorsVar2.length) {
//       e.target.style.color = 'black';
//       i = -1;
//     }
//   };
// }
//
// for (let i = 0; i < TextEL.length; i += 1) {
//   TextEL[i].addEventListener('click', changeColor1());
// }

// const date = '2021-09-15';
//
// const makeEuroDate = (a) => a.split('-').reverse().join('.');
// //console.log(makeEuroDate(date));

// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];

// const userSearch = document.getElementById('input_text');
//
// const outputText = document.getElementById('output_text');

// var 1 with 'for' circle
// const searchData = (a) => {
//   for (let i = 0; i < a.length; i += 1) {
//     const outputValue = `${a[i].country},  ${a[i].city},  ${a[i].hotel}`;
//     // eslint-disable-next-line no-restricted-syntax
//     for (const key in a[i]) {
//       if (a[i][key].toLowerCase().includes(userSearch.value.toLowerCase())) {
//         outputText.innerHTML = outputValue;
//         // console.log(outputValue);
//       }
//     }
//   }
// };

// var 2 without 'for'

// const searchData = (a) => {
//   a.forEach((element) => {
//     const searchedStr = Object.values(element).join(' ').toLowerCase();
//     if (searchedStr.includes(userSearch.value.toLowerCase())) {
//       outputText.innerHTML = Object.values(element);
//       // console.log(Object.values(element));
//     }
//   });
// };
//
// userSearch.addEventListener('input', () => { searchData(data); });

// const palindrome = (word) => { word === word.split('').reverse().join('') ? console.log('true') :
// console.log('false'); };
//
// palindrome('lol');

// const hotels = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa Cruz de Tenerife',
//     country: 'Spain',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Virgin Hotel',
//     city: 'Chicago',
//     country: 'USA',
//   },
//   {
//     name: 'Grand Beach Resort',
//     city: 'Dubai',
//     country: 'United Arab Emirates',
//   },
//   {
//     name: 'Shilla Stay',
//     city: 'Seoul',
//     country: 'South Korea',
//   },
//   {
//     name: 'San Firenze Suites',
//     city: 'Florence',
//     country: 'Italy',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Black Penny Villas',
//     city: 'BTDC, Nuca Dua',
//     country: 'Indonesia',
//   },
//   {
//     name: 'Koko Hotel',
//     city: 'Tokyo',
//     country: 'Japan',
//   },
//   {
//     name: 'Ramada Plaza',
//     city: 'Istanbul',
//     country: 'Turkey',
//   },
//   {
//     name: 'Waikiki Resort Hotel',
//     city: 'Hawaii',
//     country: 'USA',
//   },
//   {
//     name: 'Puro Hotel',
//     city: 'Krakow',
//     country: 'Poland',
//   },
//   {
//     name: 'Asma Suites',
//     city: 'Santorini',
//     country: 'Greece',
//   },
//   {
//     name: 'Cityden Apartments',
//     city: 'Amsterdam',
//     country: 'Netherlands',
//   },
//   {
//     name: 'Mandarin Oriental',
//     city: 'Miami',
//     country: 'USA',
//   },
//   {
//     name: 'Concept Terrace Hotel',
//     city: 'Rome',
//     country: 'Italy',
//   },
//   {
//     name: 'Ponta Mar Hotel',
//     city: 'Fortaleza',
//     country: 'Brazil',
//   },
//   {
//     name: 'Four Seasons Hotel',
//     city: 'Sydney',
//     country: 'Australia',
//   },
//   {
//     name: 'Le Meridien',
//     city: 'Nice',
//     country: 'France',
//   },
//   {
//     name: 'Apart Neptun',
//     city: 'Gdansk',
//     country: 'Poland',
//   },
//   {
//     name: 'Lux Isla',
//     city: 'Ibiza',
//     country: 'Spain',
//   },
//   {
//     name: 'Nox Hostel',
//     city: 'London',
//     country: 'UK',
//   },
//   {
//     name: 'Leonardo Vienna',
//     city: 'Vienna',
//     country: 'Austria',
//   },
//   {
//     name: 'Adagio Aparthotel',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
//   {
//     name: 'Steigenberger Hotel',
//     city: 'Hamburg',
//     country: 'Germany',
//   },
// ];
//
// const countries = hotels.reduce((acc, item) => { // hotels это массив => применяем .reduce
//   const result = { ...acc }; // возвращаемая переменная создание обьекта через{спред оператор}
//
//   if (!result[item.country]) { // если обьект не содержит значение item.country
//     result[item.country] = []; // делаем массив стран с 1 значением в который потом добавим гор.
//   }
//
//   if (!result[item.country].includes(item.city)) { // массив содержит строку
//     result[item.country].push(item.city); // пушим все города
//   }
//
//   return result; // возвращаем массив
// }, {});
//
// console.log(countries);

// const obj1 = {
//   a: 'a',
//   b: {
//     a: 'a',
//     b: 'b',
//     c: {
//       a: 1,
//     },
//   },
// };
// const obj2 = {
//   b: {
//     c: {
//       a: 1,
//     },
//     b: 'b',
//     a: 'a',
//   },
//   a: 'a',
// };
// const obj3 = {
//   a: {
//     c: {
//       a: 'a',
//     },
//     b: 'b',
//     a: 'a',
//   },
//   b: 'b',
// };
//
// // finded solution on https://overcoder.net/
// function deepEqual(objA, objB) {
//   const isObject = (x) => x && typeof x === 'object';
//   const isNull = (x) => x === null;
//
//   let result = true;
//   const unitedObjs = { ...objA, ...objB };
//
//   if (isNull(objA) || isNull(objB)) {
//     result = false;
//   } else {
//     for (const key in unitedObjs) {
//       if (isObject(objA[key]) || isObject(objB[key])) {
//         result = deepEqual(objA[key] || {}, objB[key] || {});
//       } else {
//         result = Boolean(objA[key] === objB[key]);
//       }
//     }
//   }
//   return result;
// }
//
// console.log(deepEqual(obj1, obj2)); // true
// console.log(deepEqual(obj1, obj3)); // false
// console.log(deepEqual(obj2, obj3)); // false
// console.log(deepEqual(null, obj1)); // false
// console.log(deepEqual({}, {})); // true

// class User {
//   constructor(parameters) {
//     this.firstName = parameters.firstName;
//     this.lastName = parameters.lastName;
//   }
//
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// const userTest = new User('Max', 'Shyshko');
//
// //console.log(userTest);
// //console.log(userTest.fullName);
//
// class Student extends User {
//   constructor(parameters) {
//     super(parameters);
//     this.admissionYear = parameters.admissionYear;
//     this.courseName = parameters.courseName;
//   }
//
//   get course() {
//     return `${+(new Date().getFullYear()) - +this.admissionYear} ${'курс'}`;
//   }
// }
//
// const studentTest = new Student(2020, 2021);
// console.log(studentTest.course);
//
// const studentsData = [
//   {
//     firstName: 'Василий',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Java',
//   },
//   {
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     admissionYear: 2018,
//     courseName: 'JavaScript',
//   },
//   {
//     firstName: 'Александр',
//     lastName: 'Федоров',
//     admissionYear: 2017,
//     courseName: 'Python',
//   },
//   {
//     firstName: 'Николай',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Android',
//   },
// ];
//
// class Students {
//   constructor(studentsArr) {
//     this.data = studentsArr;
//   }
//
//   getInfo() {
//     const resultArr = [];
//     // eslint-disable-next-line no-trailing-spaces
//     this.data.sort((a, b) => b.admissionYear - a.admissionYear).forEach((element) =>
//       resultArr.push(`${new Student(element).fullName} - ${element.courseName},`
//       + `${new Student(element).course}`));
//     return resultArr;
//   }
// }
//
// const students = new Students(studentsData);
// // console.log(students.getInfo());

// const textElLess9 = document.querySelectorAll('p.text_l_9');
//
// const colors = {
//   data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//   [Symbol.iterator]() { return this; }, // ?
//   // eslint-disable-next-line consistent-return
//   next() {
//     const last = this.data.length;
//     if (this.current === undefined || this.current === last) {
//       this.current = 0;
//     }
//     if (this.current < last) {
//       // пока не понял как исправить
//       // eslint-disable-next-line no-return-assign
//       return { done: false, value: this.data[this.current += 1] };
//     }
//   },
// };
//
// const changeStyle = (color) => (event) => {
//   let eventColor = event.target.style.color;
//   eventColor = color.next().value;
//   return eventColor;
// };
//
// for (let i = 0; i < textElLess9.length; i += 1) {
//   textElLess9[i].addEventListener('click', changeStyle({ ...colors }));
// }
