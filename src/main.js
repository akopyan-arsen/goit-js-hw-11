import { searchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.searchInput');
const list = document.querySelector('.list');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchInputValue = input.value.trim();
  if (searchInputValue !== '') {
    list.innerHTML = '';
    searchImages(searchInputValue)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data =>
        list.insertAdjacentHTML('beforeend', createMarkup(data.hits))
      )
      .catch(error => alert(error));
  }
});
