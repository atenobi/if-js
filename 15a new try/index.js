// main form element
const formInfoEl = document.getElementById('js-form-info');
const mainFormButtonEl = document.getElementById('js-main-form-button');

// counter form + counter button block elements array
const adultsCounterEl = document.querySelectorAll('span.js-adults-counter');
const childrenCounterEl = document.querySelectorAll('span.js-children-counter');
const roomsCounterEl = document.querySelectorAll('span.js-rooms-counter');

// buttons +/- elements
const plusButtonsEl = document.querySelectorAll('button.js-plus-button');
const minusButtonsEl = document.querySelectorAll('button.js-minus-button');

// main info object
const userInfoValue = {
  adults: 0,
  children: 0,
  rooms: 0,
};

// assignment value from object to text element
const assignFunc = () => {
  adultsCounterEl.forEach((el) => el.textContent = userInfoValue.adults);
  childrenCounterEl.forEach((el) => el.textContent = userInfoValue.children);
  roomsCounterEl.forEach((el) => el.textContent = userInfoValue.rooms);
};

// buttons +/- realisation
const incrementFunc = (event) => {
  event.preventDefault();
  if (event.target.previousElementSibling.classList.contains('js-adults-counter')) {
    if (userInfoValue.adults < 30) {
      userInfoValue.adults += 1;
    }
  } else if (event.target.previousElementSibling.classList.contains('js-children-counter')) {
    if (userInfoValue.children < 10) {
      userInfoValue.children += 1;
    }
  } else if (event.target.previousElementSibling.classList.contains('js-rooms-counter')) {
    if (userInfoValue.rooms < 30) {
      userInfoValue.rooms += 1;
    }
  }
  assignFunc();
};

const decrementFunc = (event) => {
  event.preventDefault();
  if (event.target.nextElementSibling.classList.contains('js-adults-counter')) {
    if (userInfoValue.adults > 0) {
      userInfoValue.adults -= 1;
    }
  } else if (event.target.nextElementSibling.classList.contains('js-children-counter')) {
    if (userInfoValue.children > 0) {
      userInfoValue.children -= 1;
    }
  } else if (event.target.nextElementSibling.classList.contains('js-rooms-counter')) {
    if (userInfoValue.rooms > 0) {
      userInfoValue.rooms -= 1;
    }
  }
  assignFunc();
};

plusButtonsEl.forEach((el) => el.addEventListener('click', incrementFunc));
minusButtonsEl.forEach((el) => el.addEventListener('click', decrementFunc));

// operation with form data
const showResultFunc = (event) => {
  event.preventDefault();
  // create form data
  const userData = new FormData(formInfoEl);
  userData.set('adults', userInfoValue.adults);
  userData.set('children', userInfoValue.children);
  userData.set('rooms', userInfoValue.rooms);
  console.log(userData.get('adults') + userData.get('children') + userData.get('rooms'));
};

mainFormButtonEl.addEventListener('click', showResultFunc);
