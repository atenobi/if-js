const hotelsApi = 'https://fe-student-api.herokuapp.com/api/hotels';

// page elements
const outputDivEl = document.querySelector('div.js-homes-guests-content');
const destinationButtonEl = document.querySelector('input.js_search_button');
const availableOutputContentEl = document.querySelector('div.js-output-hotels');
const topSectionInputEl = document.querySelector('input#destination');
const availableHotelsDivEl = document.querySelector('div.js-available-hotels');

// bubble sort function
function bubbleSort(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
      if (arr[j].name > arr[j + 1].name) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

// visualization in page
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

// server and session storage
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

// output result function
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
const formAdultsEl = document.getElementById('adults');
const formChildrenEl = document.getElementById('children');
const formRoomsEl = document.getElementById('rooms');
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
//

const testButtonEl = document.getElementById('test-button');
const formPersonsValue = new FormData(formPersonsTextEl);

const show = (event) => {
  event.preventDefault();
  console.log(formPersonsValue.keys().next());
};

testButtonEl.addEventListener('click', show);
