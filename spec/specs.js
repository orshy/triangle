describe('triangle', function() {
  it("will return false if one side is at least as long as the other two combined", function() {
    expect(triangle(2,2,8)).to.equal('Not a triangle');
  });

  it("will return Equilateral triangle if all sides equal", function(){
    expect(triangle(6,6,6)).to.equal("Equilateral");
  });

  it("will return Scalene if no sides equal", function (){
    expect(triangle(4,5,6)).to.equal("Scalene");
  })
  it("will return Isosceles if two sides are equal", function (){
    expect(triangle(4,4,2)).to.equal("Isosceles");
  })
});
