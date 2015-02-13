var triangle = function( a, b, c ) {
  if (a + b <= c) {
    return 'This is not a triangle'
  } else if ((a === b) && (b === c)) {
    return "This is an Equilateral triangle"
  };
};
