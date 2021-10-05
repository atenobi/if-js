const hotelsApi = 'https://fe-student-api.herokuapp.com/api/hotels';

// page elements
const outputDivEl = document.querySelector('div.js-homes-guests-content');
const destinationButtonEl = document.querySelector('input.js_search_button');
const availableOutputContentEl = document.querySelector('div.js-output-hotels');
const topSectionInputEl = document.querySelector('input#destination');
const availableHotelsDivEl = document.querySelector('div.js-available-hotels');

// bubble sort function -> module
function bubbleSort(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
      if (arr[j].name > arr[j + 1].name) {
        const swap = arr[j];
        // eslint-disable-next-line no-param-reassign
        arr[j] = arr[j + 1];
        // eslint-disable-next-line no-param-reassign
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

// visualization in page result block
function outputDataValues(arr, output) {
  arr.forEach((element) => {
    const domEl = document.createElement('ul');
    domEl.classList.add('content_item_container');
    domEl.innerHTML = `<img src = '${element.imageUrl}' class="content_image" alt="photo">
        <p class="content_name_text">${element.name}</p>
        <p class="content_location_text">${element.city}, ${element.country}</p>`;
    output.append(domEl);
  });
}

// session storage
const storageData = sessionStorage;

if (storageData.length === 0) {
  fetch(hotelsApi)
    .then((response) => response.json()
      .then((data) => {
        outputDataValues(data.slice(0, 4), outputDivEl);
        storageData.setItem('hotels', JSON.stringify(data));
      })
      .catch((err) => {
        outputDivEl.textContent = err.message;
        return err.message;
      }));
} else {
  outputDataValues(JSON.parse(storageData.hotels).slice(0, 4), outputDivEl);
}

// searching function
const userSearch = (event) => {
  event.preventDefault();
  const userSearchString = topSectionInputEl.value.toLowerCase();
  const savedDataHotels = bubbleSort(JSON.parse(storageData.hotels));
  const findedResult = [];

  availableHotelsDivEl.classList.add('visible_element');

  for (let i = 0; i < savedDataHotels.length; i += 1) {
    if (savedDataHotels[i].name.toLowerCase().includes(userSearchString)
      || savedDataHotels[i].country.toLowerCase().includes(userSearchString)
      || savedDataHotels[i].city.toLowerCase().includes(userSearchString)
    ) {
      findedResult.push(savedDataHotels[i]);
    }
  }
  outputDataValues(findedResult.slice(0, 4), availableOutputContentEl);
};

destinationButtonEl.addEventListener('click', userSearch);
// lesson-11

// full form text
const formPersonsTextEl = document.getElementById('js-form-persons-text');

// number value of counter in form
const formAdultsEl = document.querySelectorAll('span.js-adults-counter');
const formChildrenEl = document.querySelectorAll('span.js-children-counter');
const formRoomsEl = document.querySelectorAll('span.js-rooms-counter');
const counterEl = document.querySelector('div.persons_count');

// container for values
const personsValues = {
  adults: 0,
  children: 0,
  childrenAge: [],
  rooms: 0,
};

// assignment value from object to text elements on form and counter
const assignmentFunc = () => {
  formAdultsEl.forEach((el) => el.textContent = personsValues.adults);
  formChildrenEl.forEach((el) => el.textContent = personsValues.children);
  formRoomsEl.forEach((el) => el.textContent = personsValues.rooms);
};

// counter +/- buttons
const minesButtonEl = document.querySelectorAll('button.minus');
const plusButtonEl = document.querySelectorAll('button.plus');

// function for visibility change
const changeVisibility = (el) => {
  el.classList.toggle('visible_element');
};

// created age select element
const childAgeEl = document.querySelector('div.child_age');
const childSelectsWrapperEl = document.querySelector('div.child_age_selects');
const childSelectOriginEl = document.getElementById('js-childAge');
// const childSelectAllEl = document.querySelectorAll('select.js-age-array');
// childSelectAllEl.forEach((el) => personsValues.childrenAge.push(el.value));

// making select clones
const creationSelectElements = () => {
  if (personsValues.children > 1) {
    const clone = childSelectOriginEl.cloneNode(true);
    clone.classList.add('js-age-array');
    childSelectsWrapperEl.appendChild(clone);
  }
};

// children age change functions
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

// function for (-)
const decreaseValue = (event) => {
  if (event.target.nextElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults > 0) {
      personsValues.adults -= 1;
    }
  } else if (event.target.nextElementSibling.classList.contains('count_children')) {
    if (personsValues.children > 0) {
      personsValues.children -= 1;
      childDecrease();
    }
  } else if (event.target.nextElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms > 0) {
      personsValues.rooms -= 1;
    }
  }
  assignmentFunc();
};

// function for (+)
const increaseValue = (event) => {
  if (event.target.previousElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults < 30) {
      personsValues.adults += 1;
    }
  } else if (event.target.previousElementSibling.classList.contains('count_children')) {
    if (personsValues.children < 10) {
      personsValues.children += 1;
      childIncrease();
    }
  } else if (event.target.previousElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms < 30) {
      personsValues.rooms += 1;
    }
  }
  assignmentFunc();
};

// event listeners
minesButtonEl.forEach((el) => el.addEventListener('click', decreaseValue));
plusButtonEl.forEach((el) => el.addEventListener('click', increaseValue));
formPersonsTextEl.addEventListener('click', () => {
  formPersonsTextEl.classList.toggle('form_persons_clicked_container');
});
formPersonsTextEl.addEventListener('click', () => changeVisibility(counterEl));

const formPersonsValue = new FormData(formPersonsTextEl);

const saveUserFormPoles = () => {
  formPersonsValue.set('adults', `${personsValues.adults}`);
  formPersonsValue.set('children', `${personsValues.children}`);
  formPersonsValue.set('rooms', `${personsValues.rooms}`);
};

// final compile of url and show it in console
const showResult = (event) => {
  event.preventDefault();
  saveUserFormPoles();
  const search = `?search=${topSectionInputEl.value}`;
  const url = new URL(hotelsApi).toString();
  const adults = `&adults=${formPersonsValue.get('adults')}`;
  const children = `&children=${formPersonsValue.get('children')}`;
  const rooms = `&rooms=${formPersonsValue.get('rooms')}`;
  const resultStr = `${url}${search}${adults}${children}${rooms}`;
  console.log(resultStr);

  return resultStr;
  // console.log(personsValues.childrenAge);
};

destinationButtonEl.addEventListener('click', showResult);
