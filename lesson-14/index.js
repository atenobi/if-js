const formDataEl = document.querySelector('form.file-form');

const sendData = async (event) => {
  event.preventDefault();
  const fetchFile = {
    method: 'POST',
    body: new FormData(formDataEl),
  };
  const result = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchFile)
    .then((response) => response.json());
  console.log(result);
};

formDataEl.addEventListener('submit', sendData);
