describe('triangle', function() {
  it("will return false if one side is at least as long as the other two combined", function() {
    expect(triangle(2,2,8)).to.equal('Is not a triangle, try again!');
  });

  it("will return Equilateral triangle if all sides equal", function(){
    expect(triangle(6,6,6)).to.equal("Is an Equilateral triangle.");
  });

  it("will return Scalene if no sides equal", function (){
    expect(triangle(4,5,6)).to.equal("Is a Scalene triangle.");
  })
  it("will return Isosceles if two sides are equal", function (){
    expect(triangle(4,4,2)).to.equal("Is an Isosceles triangle.");
  })
});
