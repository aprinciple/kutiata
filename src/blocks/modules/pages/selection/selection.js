const liveSearch = document.querySelector('.live-search');
if (liveSearch) {
  let liveSearchResults = liveSearch.querySelector('.live-search__results');
  let inputSearch = liveSearch.querySelector('.search__input');

  inputSearch.addEventListener('keyup', (e) => {
    let valueInputSearch = inputSearch.value.toLowerCase();

    if (valueInputSearch.indexOf('нем') !== -1) {
      liveSearchResults.style.display = 'block';
    } else {
      liveSearchResults.style.display = 'none';
    }
  });
}