/*
 import { bubbleSort } from './modules/bubbleSort';
 import { changeVisibility } from './modules/changeVisibility';
 import { childIncrease, childDecrease } from './modules/children(+-)';
 import { decreaseValue } from './modules/minusButtonFunction';
 import { increaseValue } from './modules/plusButtonFunction';
 import { creationSelectElements } from './modules/selectCloneCreation';
 import { saveParamsToUrl } from './modules/URLmackingFunction';
 import { outputDataValues } from './modules/visualisationOnPageFunction';
*/

const baseUrl = 'https://fe-student-api.herokuapp.com/api/';
const hotelsApi = `${baseUrl}hotels?`;
let myResultUrl = '';

// page elements
const outputDivEl = document.querySelector('div.js-homes-guests-content');
const destinationButtonEl = document.querySelector('input.js-search-button');
const availableOutputContentEl = document.querySelector('div.js-output-hotels');
const topSectionInputEl = document.querySelector('input#destination');
const availableHotelsDivEl = document.querySelector('div.js-available-hotels');

// bubble sort function -> module +
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

// full form text
const formPersonsTextEl = document.getElementById('js-form-persons-text');

// number value of counter in form
const formAdultsEl = document.querySelectorAll('span.js-adults-counter');
const formChildrenEl = document.querySelectorAll('span.js-children-counter');
const formRoomsEl = document.querySelectorAll('span.js-rooms-counter');
const counterEl = document.querySelector('div.persons_count');

// container for values
const personsValues = {
  adults: {
    min: 0,
    max: 30,
    default: 1,
    value: 0,
  },
  children: {
    min: 0,
    max: 10,
    default: 0,
    value: 0,
    childrenAge: [],
  },
  rooms: {
    min: 0,
    max: 30,
    default: 1,
    value: 0,
  },
};

// assignment value from object to text elements on form and counter
const assignmentFunc = () => {
  formAdultsEl.forEach((el) => el.textContent = personsValues.adults.value);
  formChildrenEl.forEach((el) => el.textContent = personsValues.children.value);
  formRoomsEl.forEach((el) => el.textContent = personsValues.rooms.value);
};

// counter +/- buttons
const minesButtonEl = document.querySelectorAll('button.minus');
const plusButtonEl = document.querySelectorAll('button.plus');

// function for visibility change -> module +
const changeVisibility = (el) => {
  el.classList.toggle('visible_element');
};

// created age select element
const childAgeEl = document.querySelector('div.child_age');
const childSelectsWrapperEl = document.querySelector('div.child_age_selects');

// making select clones -> module +
const creationSelectElements = () => {
  const childSelectOriginEl = document.createElement('select');
  childSelectOriginEl.id = 'js-childAge';
  childSelectOriginEl.classList.add('child_age_option_item');
  childSelectOriginEl.classList.add('js-age-array');
  let counter = 1;

  do {
    const optionSelect = document.createElement('option');
    optionSelect.value += counter;
    optionSelect.textContent = `${counter} year old`;
    childSelectOriginEl.appendChild(optionSelect);
    counter += 1;
  } while (counter < 19);
  childSelectsWrapperEl.appendChild(childSelectOriginEl);
};

// finished age finding function
const getAge = () => {
  const childSelectAllEl = document.querySelectorAll('select.js-age-array');
  personsValues.children.childrenAge = [];
  childSelectAllEl.forEach((el) => {
    personsValues.children.childrenAge.push(el.options[el.selectedIndex].value);
  });
};

// children age change functions -> module +
const childIncrease = () => {
  if (personsValues.children.value < personsValues.children.max) {
    creationSelectElements();
    childAgeEl.classList.add('visible_element');
  }
};

const childDecrease = () => {
  if (personsValues.children.value > personsValues.children.min) {
    childSelectsWrapperEl.removeChild(childSelectsWrapperEl.lastChild);
  }
  if (personsValues.children.value === personsValues.children.default) {
    childAgeEl.classList.remove('visible_element');
  }
};

// function for (-) -> module +
const decreaseValue = (event) => {
  if (event.target.nextElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults.value > personsValues.adults.min) {
      personsValues.adults.value -= 1;
    }
  } else if (event.target.nextElementSibling.classList.contains('count_children')) {
    if (personsValues.children.value > personsValues.children.min) {
      personsValues.children.value -= 1;
      childDecrease();
    }
  } else if (event.target.nextElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms.value > personsValues.rooms.min) {
      personsValues.rooms.value -= 1;
    }
  }
  assignmentFunc();
};

// function for (+) -> module +
const increaseValue = (event) => {
  if (event.target.previousElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults.value < personsValues.adults.max) {
      personsValues.adults.value += 1;
    }
  } else if (event.target.previousElementSibling.classList.contains('count_children')) {
    if (personsValues.children.value < personsValues.children.max) {
      personsValues.children.value += 1;
      childIncrease();
    }
  } else if (event.target.previousElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms.value < personsValues.rooms.max) {
      personsValues.rooms.value += 1;
    }
  }
  assignmentFunc();
};

// event listeners
minesButtonEl.forEach((el) => el.addEventListener('click', decreaseValue));
plusButtonEl.forEach((el) => el.addEventListener('click', increaseValue));

// change form style on click
formPersonsTextEl.addEventListener('click', () => {
  formPersonsTextEl.classList.toggle('form_persons_clicked_container');
});

formPersonsTextEl.addEventListener('click', () => changeVisibility(counterEl));

// final compile of url and show it in console -> module +
const saveParamsToUrl = () => {
  getAge();
  const URlUserParams = new URLSearchParams();

  // save URl params from Object to url
  URlUserParams.append('search', topSectionInputEl.value);
  URlUserParams.append('adults', personsValues.adults.value);
  URlUserParams.append('children', personsValues.children.childrenAge.join(','));
  URlUserParams.append('rooms', personsValues.rooms.value);

  myResultUrl = hotelsApi + URlUserParams.toString();
  // console.log(myResultUrl);
};

// visualization in page result block function -> module +
async function outputDataValues(arr, output) {
  await saveParamsToUrl();
  // eslint-disable-next-line no-param-reassign
  output.innerHTML = '';
  arr.forEach((element) => {
    const domEl = document.createElement('ul');
    domEl.classList.add('content_item_container');
    domEl.innerHTML = `<img src = '${element.imageUrl}' class="content_image" alt="photo">
        <p class="content_name_text">${element.name}</p>
        <p class="content_location_text">${element.city}, ${element.country}</p>`;
    output.append(domEl);
  });
}

// session storage / not function for block `Homes guests loves`
const storageData = sessionStorage;

if (storageData.length === 0) {
  // ->fetch place
  fetch(hotelsApi)
    .then((response) => response.json()
      .then((data) => {
        outputDataValues(bubbleSort(data).slice(0, 4), outputDivEl);
        storageData.setItem('hotels', JSON.stringify(data));
      })
      .catch((err) => {
        outputDivEl.classList.add('text_lg');
        outputDivEl.textContent = err.message;
        return err.message;
      }));
} else {
  outputDataValues(JSON.parse(storageData.hotels).slice(0, 4), outputDivEl);
}

// finish filter use function
const userConfirmClick = async (event) => {
  event.preventDefault();
  await saveParamsToUrl();
  fetch(myResultUrl)
    .then((response) => response.json()
      .then((data) => {
        if (data.length > 0) {
          outputDataValues(bubbleSort(data).slice(0, 4), availableOutputContentEl);
        } else {
          availableOutputContentEl.classList.add('text_message_special');
          availableOutputContentEl.textContent = 'Sorry, nothing was found.'
            + ' Please check the information you entered.'
            + ' Or you too young to travel?';
        }
      })
      .catch((err) => {
        availableOutputContentEl.classList.add('text_message_special');
        availableOutputContentEl.textContent = 'Ups, something goes wrong.Please check yours info.';
        // console.log(err.message);
        return err.message;
      }));
  availableHotelsDivEl.classList.add('visible_element');
};

destinationButtonEl.addEventListener('click', userConfirmClick);
