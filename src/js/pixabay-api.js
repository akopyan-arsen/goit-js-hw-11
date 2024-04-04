const list = document.querySelector('.list');
const API_KEY = '43234755-a337228de2a5121df872aa78d';
import createMarkup from './render-functions';

const params = new URLSearchParams({
  key: API_KEY,
  q: 'orange+cat',
});

fetch(`https://pixabay.com/api/?${params}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => list.insertAdjacentHTML('beforeend', createMarkup(data.hits)))
  .catch(error => console.log(error));
