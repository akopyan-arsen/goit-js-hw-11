export function createMarkup(arr) {
  return arr
    .map(
      ({
        id,
        webformatURL,
        tags,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class='card' data-id='${id}'><img class='image' src='${webformatURL}' alt='${tags}'>
        <div class='description'>
        <div class='title-text'><h4 class='title'>Likes</h4><p class='text'>${likes}</p></div>
        <div class='title-text'><h4 class='title'>Views</h4><p class='text'>${views}</p></div>
        <div class='title-text'><h4 class='title'>Comments</h4><p class='text'>${comments}</p>
        </div><div class='title-text'><h4 class='title'>Downloads</h4><p class='text'>${downloads}</p></div>
        </div></li>`
    )
    .join('');
}
