(function () {

  // Setting up the options
  var options = {
    startLength: 0, // start positioning the slider items at the beginning of the SVG path
    duration: 700, // animation duration (used by anime.js)
    stagger: 0, // incrementally delays among items, producing an staggering effect
    easing: 'easeInOutCubic', // easing function (used by anime.js)
    elasticity: 100, // elasticity factor (used by anime.js)
    rotate: true, // This indicates that items should be rotated properly to match the SVG path curve
    activeSeparation: 72
  };

  // Initialize the slider using our SVG path, items, and options
  new PathSlider('.path-slider__path', '.path-slider__item', options);
})();

