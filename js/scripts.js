var triangle = function( a, b, c ) {
  if (a + b <= c) {
    return "Is not a triangle, try again!"
  } else if ((a === b) && (b === c)) {
    return "Is an Equilateral triangle."
  } else if ((a !== b) && (b !== c)) {
    return "Is a Scalene triangle."
  } else
  return "Is an Isosceles triangle."
};

$(document).ready(function() {
  $("form#triangle-ep").submit(function(event) {

    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var answer = triangle(a, b, c);

    $(".triangle").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
