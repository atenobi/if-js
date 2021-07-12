// // output element
// const findElFunc = (x) => document.querySelector(x);
// const adultsEl = findElFunc('p.form_adults_output');
// const childrenEl = findElFunc('p.form_children_output');
// const roomsEl = findElFunc('p.form_rooms_output');
//
// // // container
// const personsEl = findElFunc('div.form_persons_container');
//
// const counterEl = findElFunc('div.persons_count_hidden');
//
// // elements
// const adultsInputEl = findElFunc('input.adults_input');
// const childrenInputEl = findElFunc('input.children_input');
// const roomsInputEl = findElFunc('input.rooms_input');
//
// const changeCounter = function (x, y) {
//   x.innerHTML = `${y.value}`;
// };
//
// adultsInputEl.addEventListener('click', changeCounter(adultsEl, adultsInputEl));
// childrenInputEl.addEventListener('click', changeCounter(childrenEl, childrenInputEl));
// roomsInputEl.addEventListener('click', changeCounter(roomsEl, roomsInputEl));
//
// const counterVisible = () => {
//   if (counterEl.classList.contains('persons_count_hidden')) {
//     counterEl.classList.add('persons_count_visible');
//     personsEl.classList.add('form_persons_clicked_container');
//   }
// };
//
// personsEl.addEventListener('click', counterVisible);
//
// const changeChildrenCounter = function (e) {
//   let childrenAge;
//   if (e.target.value > 0) {
//     childrenAge = document.createElement('div');
//     childrenAge.classList.add('child_age_visible');
//     childrenAge.innerHTML = `<label for="child_age">
//     What is the age of the child you’re travelling with?</label>
//         <input type="number" min="0" max="17" value="0" id="child_age">`;
//     counterEl.after(childrenAge);
//   }
//   if (e.target.value === 0) {
//     childrenAge.classList.add('persons_count_hidden');
//   }
// };
//
// childrenInputEl.addEventListener('click', changeChildrenCounter);

const countData = {
  adults: 0,
  children: 0,
  rooms: 0,
};

const result = {};
