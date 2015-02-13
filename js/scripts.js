var triangle = function( a, b, c ) {
  if (a + b <= c) {
    return "Not a triangle"
  } else if ((a === b) && (b === c)) {
    return "Equilateral"
  } else if ((a !== b) && (b !== c)) {
    return "Scalene"
  } else
  return "Isosceles"
};
