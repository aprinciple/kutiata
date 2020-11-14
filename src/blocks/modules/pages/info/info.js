const bar = document.querySelectorAll('.bar');
if (bar) {
  bar.forEach((item) => {
    let percent = +item.dataset.percent;
    let track = item.querySelector('.bar__track');
    track.style.width = `${percent}%`;

    if (percent <= 30) track.style.backgroundColor = '#d01111';
    if (percent > 30 && percent <= 50) track.style.backgroundColor = '#a2a2a2';
    if (percent > 50) track.style.backgroundColor = '#44ba04';
  });
}

const slider = document.querySelector('.slider');
if (slider) {
  let initSlider = tns({
    'container': slider.querySelector('.slider__wrapper'),
    'items': 1,
    // 'mode': 'gallery',
    "controlsContainer": false,
    'navContainer': slider.querySelector('.slider__thumbnails'),
    'navAsThumbnails': true,
    'controls': true,
    'prevButton': slider.querySelector('.slider__prev'),
    'nextButton': slider.querySelector('.slider__next'),
    'preventScrollOnTouch': 'force'
  });
}