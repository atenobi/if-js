const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const ulEl = document.querySelector('ul.content_item_container');

const dataExtract = function (arrEl, domEl) {
  const img = document.createElement('img');
  const name = document.createElement('p');
  const location = document.createElement('p');
  img.className = 'content_image';
  img.src = arrEl.imageUrl;

  name.innerHTML = `${arrEl.name}`;
  name.classList.add('content_name_text');
  location.innerHTML = `${arrEl.city} ${arrEl.country}`;
  location.classList.add('content_location_text');

  domEl.prepend(img);
  img.after(name);
  name.after(location);
  return domEl;
};

const outputAllEl = function (i) {
  // let i = 0;
  dataExtract(data[i], ulEl);
  const cloneEl = function () {
    const cloner = (x) => x.cloneNode();
    if (i < data.length) {
      i += 1;
      return ulEl.after(dataExtract(data[i], cloner(ulEl)));
    }
    i = 0;
    return i;
  };
  if (i < data.length) {
    cloneEl();
    cloneEl();
    cloneEl();
  }
};

outputAllEl(0);

//  // var 2 (with unfinished changer)
const output = document.querySelector('div.container_content');

function outputDataValues(arr) {
  arr.forEach((element) => {
    const domEl = document.createElement('ul');
    domEl.classList.add('content_item_container');
    domEl.innerHTML = `<img src = '${element.imageUrl}' class="content_image" alt="photo">
        <p class="content_name_text">${element.name}</p>
        <p class="content_location_text">${element.city}, ${element.country}</p>`;
    output.append(domEl);
  });
}

outputDataValues(data.slice(0, 4));

// // changer button
// function sliderListener() {
//   slideButtonEl.classList.add('pushed_button');
//   outputDataValues(data.slice(4, 8));
// }
//
// const slideButtonEl = document.querySelector('svg.slide_button');
// slideButtonEl.addEventListener('click', sliderListener);
