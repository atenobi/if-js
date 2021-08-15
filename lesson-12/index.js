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

const storageData = sessionStorage;

if (storageData.length === 0) {
  fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((data) => {
      outputDataValues(data.slice(0, 4));
      storageData.setItem('hotels', JSON.stringify(data.slice(0, 4)));
    })
    .catch((err) => {
      output.textContent = err;
      return err;
    });
} else {
  outputDataValues(JSON.parse(storageData.hotels));
}
// // changer button (unfinished)
// function sliderListener() {
//   slideButtonEl.classList.add('pushed_button');
//   outputDataValues(data.slice(4, 8));
// }
//
// const slideButtonEl = document.querySelector('svg.slide_button');
// slideButtonEl.addEventListener('click', sliderListener);
