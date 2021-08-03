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
    // button style
    if (personsValues.adults === 0) {
      countAdultsEl.previousElementSibling.classList.remove('button_changed_style');
    }
    if (personsValues.adults < 30) {
      countAdultsEl.nextElementSibling.classList.add('button_changed_style');
    }
  } else if (event.target.nextElementSibling.classList.contains('count_children')) {
    if (personsValues.children > 0) {
      personsValues.children -= 1;
      formChildrenEl.textContent = personsValues.children;
      countChildrenEl.textContent = personsValues.children;
    }
    // button style
    if (personsValues.children === 0) {
      countChildrenEl.previousElementSibling.classList.remove('button_changed_style');
    }
    if (personsValues.children < 10) {
      countChildrenEl.nextElementSibling.classList.add('button_changed_style');
    }
  } else if (event.target.nextElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms > 0) {
      personsValues.rooms -= 1;
      formRoomsEl.textContent = personsValues.rooms;
      countRoomsEl.textContent = personsValues.rooms;
    }
    // button style
    if (personsValues.rooms === 0) {
      countRoomsEl.previousElementSibling.classList.remove('button_changed_style');
    }
    if (personsValues.rooms < 30) {
      countRoomsEl.nextElementSibling.classList.add('button_changed_style');
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
    // button style
    if (personsValues.adults > 0) {
      countAdultsEl.previousElementSibling.classList.add('button_changed_style');
    }
    if (personsValues.adults === 30) {
      countAdultsEl.nextElementSibling.classList.remove('button_changed_style');
      countAdultsEl.nextElementSibling.classList.add('button_default_style');
    }
  } else if (event.target.previousElementSibling.classList.contains('count_children')) {
    if (personsValues.children < 10) {
      personsValues.children += 1;
      formChildrenEl.textContent = personsValues.children;
      countChildrenEl.textContent = personsValues.children;
    }
    // button style
    if (personsValues.children > 0) {
      countChildrenEl.previousElementSibling.classList.add('button_changed_style');
    }
    if (personsValues.children === 10) {
      countChildrenEl.nextElementSibling.classList.remove('button_changed_style');
      countChildrenEl.nextElementSibling.classList.add('button_default_style');
    }
  } else if (event.target.previousElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms < 30) {
      personsValues.rooms += 1;
      formRoomsEl.textContent = personsValues.rooms;
      countRoomsEl.textContent = personsValues.rooms;
    }
    // button style
    if (personsValues.rooms > 0) {
      countRoomsEl.previousElementSibling.classList.add('button_changed_style');
    }
    if (personsValues.rooms === 30) {
      countRoomsEl.nextElementSibling.classList.remove('button_changed_style');
      countRoomsEl.nextElementSibling.classList.add('button_default_style');
    }
  }
};

// event listeners
minesButtonEl.forEach((el) => el.addEventListener('click', decreaseValue));
plusButtonEl.forEach((el) => el.addEventListener('click', increaseValue));
formPersonsTextEl.addEventListener('click', () => {
  formPersonsTextEl.classList.toggle('form_persons_clicked_container');
});
formPersonsTextEl.addEventListener('click', () => changeVisibility(counterEl));

// child age select element creation
// child buttons
const childMinusButtonEl = document.querySelector('button.child_minus');
const childPlusButtonEl = document.querySelector('button.child_plus');
// container for children age
const childAgeEl = document.querySelector('div.child_age');
const childSelectsWrapperEl = document.querySelector('div.child_age_selects');
// created age select element
const creationSelectElements = () => {
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

  childSelectsWrapperEl.appendChild(makerAge(selectEl));
};

const childIncrease = () => {
  if (childSelectsWrapperEl.childNodes.length < 10) {
    creationSelectElements();
    childAgeEl.classList.add('visible_element');
  }
};

const childDecrease = () => {
  if (childSelectsWrapperEl.childNodes.length > 0) {
    childSelectsWrapperEl.removeChild(childSelectsWrapperEl.lastChild);
  }
  if (childSelectsWrapperEl.childNodes.length === 0) {
    childAgeEl.classList.remove('visible_element');
  }
};

childPlusButtonEl.addEventListener('click', childIncrease);
childMinusButtonEl.addEventListener('click', childDecrease);
