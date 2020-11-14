const advertPhotos = document.querySelector('.advert__photos');
if (advertPhotos) {
  let slider = tns({
    'container': advertPhotos.querySelector('.advert__photos-wrapper'),
    'items': 1,
    "controlsContainer": false,
    'navContainer': advertPhotos.querySelector('.advert__photos-thumbnails'),
    'navAsThumbnails': true,
    'swipeAngle': false,
    'controls': true,
    'prevButton': advertPhotos.querySelector('.advert__photos-prev'),
    'nextButton': advertPhotos.querySelector('.advert__photos-next'),
    'preventScrollOnTouch': 'force'
  });
}

const fixedBar = document.querySelector('.fixed-bar');
if (fixedBar) {
  let advertButtons = document.querySelector('.advert__buttons');
  let advertTitle = document.querySelector('.advert__title');

  let options = {
    root: null,
    threshold: 1.0
  };

  let callback = function(entries, observer) { 
    entries.forEach(entry => {
      
      if (entry.target === advertButtons && window.matchMedia("(max-width: 991px)").matches) {
        if (entry.isIntersecting) {
          fixedBar.style.display = 'none';
        } else {
          fixedBar.style.display = 'grid';  
        }
      }

      if (entry.target === advertTitle && window.matchMedia("(min-width: 992px)").matches) {
        if (entry.isIntersecting) {
          fixedBar.style.display = 'none';
        } else {
          fixedBar.style.display = 'grid';  
        }
      }

    });
  };

  let observer = new IntersectionObserver(callback, options);
  observer.observe(advertButtons);
  observer.observe(advertTitle);
}