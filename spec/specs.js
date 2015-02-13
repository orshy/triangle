describe('triangle', function() {
  it("will return false if one side is at least as long as the other two combined", function() {
    expect(triangle(2,2,8)).to.equal('This is not a triangle');
  });
});
