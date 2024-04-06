export function searchImages(searchInput) {
  const API_KEY = '43234755-a337228de2a5121df872aa78d';

  const params = new URLSearchParams({
    key: API_KEY,
    q: searchInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`);
}
