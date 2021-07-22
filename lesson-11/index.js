// full form text
const formPersonsTextEl = document.querySelector('div.form_persons_container');
// number value of counter in form
const formAdultsEl = document.querySelector('span.form_adults');
const formChildrenEl = document.querySelector('span.form_children');
const formRoomsEl = document.querySelector('span.form_rooms');
const counterEl = document.querySelector('div.persons_count');

// number value of counter in form
const countAdultsEl = document.querySelector('span.count_adults');
const countChildrenEl = document.querySelector('span.count_children');
const countRoomsEl = document.querySelector('span.count_rooms');

// container for values
const personsValues = {
  adults: 0,
  children: 0,
  rooms: 0,
};

// counter +/- buttons
const minesButtonEl = document.querySelectorAll('button.minus');
const plusButtonEl = document.querySelectorAll('button.plus');

// function for visibility change
const changeVisibility = (el) => {
  el.classList.toggle('visible_element');
};

// function for (-)
const decreaseValue = (event) => {
  if (event.target.nextElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults > 0) {
      personsValues.adults -= 1;
      formAdultsEl.textContent = personsValues.adults;
      countAdultsEl.textContent = personsValues.adults;
    }
  } else if (event.target.nextElementSibling.classList.contains('count_children')) {
    if (personsValues.children > 0) {
      personsValues.children -= 1;
      formChildrenEl.textContent = personsValues.children;
      countChildrenEl.textContent = personsValues.children;
    }
  } else if (event.target.nextElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms > 0) {
      personsValues.rooms -= 1;
      formRoomsEl.textContent = personsValues.rooms;
      countRoomsEl.textContent = personsValues.rooms;
    }
  }
};

// function for (+)
const increaseValue = (event) => {
  if (event.target.previousElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults < 30) {
      personsValues.adults += 1;
      formAdultsEl.textContent = personsValues.adults;
      countAdultsEl.textContent = personsValues.adults;
    }
  } else if (event.target.previousElementSibling.classList.contains('count_children')) {
    if (personsValues.children < 20) {
      personsValues.children += 1;
      formChildrenEl.textContent = personsValues.children;
      countChildrenEl.textContent = personsValues.children;
    }
  } else if (event.target.previousElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms < 30) {
      personsValues.rooms += 1;
      formRoomsEl.textContent = personsValues.rooms;
      countRoomsEl.textContent = personsValues.rooms;
    }
  }
};

// event listeners
minesButtonEl.forEach((el) => el.addEventListener('click', decreaseValue));
plusButtonEl.forEach((el) => el.addEventListener('click', increaseValue));
formPersonsTextEl.addEventListener('click', () => changeVisibility(counterEl));

// child age select element creation
const childrenCountEl = document.querySelector('span.count_children');
// container for children age
const childAgeEl = document.querySelector('div.child_age');
// text children age
const childAgeTextEl = document.querySelector('p.child_age_text');
// created age select element
const selectEl = document.createElement('select');
selectEl.classList.add('child_age_option_item');

const makerAge = (fatherEl) => {
  let optionEl = '';
  let age = 1;
  while (age < 18) {
    optionEl = document.createElement('option');
    optionEl.textContent = `${age} year old`;
    age += 1;
    fatherEl.appendChild(optionEl);
  }
  return fatherEl;
};

childAgeTextEl.after(makerAge(selectEl));

const observer = new MutationObserver((mutationRecords) => {
  const valueCount = mutationRecords[0].addedNodes[0].textContent;
  if (valueCount > 0) {
    childAgeEl.classList.add('visible_element');
  } else {
    childAgeEl.classList.remove('visible_element');
  }
});

observer.observe(childrenCountEl, {
  childList: true,
  subtree: true,
  characterDataOldValue: true,
});
