describe('triangle', function() {
  it("will return false if one side is at least as long as the other two combined", function() {
    expect(triangle(2,2,8)).to.equal('This is not a triangle');
  });

  it("will return Equilateral", function(){
    expect(triangle(6,6,6)).to.equal("This is an Equilateral triangle");
  });
});
