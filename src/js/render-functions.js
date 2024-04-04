export function createMarkup(arr) {
  return arr
    .map(
      ({ id, previewURL, tags }) =>
        `<li data-id='${id}'><img src='${previewURL}' alt='${tags}' width='300'></li>`
    )
    .join('');
}
