const formDataEl = document.querySelector('form.file-form');

const chooseImageDivEl = document.querySelector('div.choose_image_div');

const getUrlImage = (file) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    resolve(event.target.result);
  });
  reader.readAsDataURL(file);
});

formDataEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const dataFile = new FormData(formDataEl);

  const file = dataFile.get('file');
  const imageUrl = await getUrlImage(file);

  const image = document.createElement('img');
  image.setAttribute('src', `${imageUrl}`);
  image.setAttribute('class', 'div_image');
  chooseImageDivEl.prepend(image);
});
