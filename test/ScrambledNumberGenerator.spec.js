var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
var scrambledNumberGenerator = require('../Scrambled-Number-Generator.js')
describe('Scrambled-Number-Generator', function(){

  it('should be a function', function(){
    expect(scrambledNumberGenerator).to.be.a('function');
  });

  it("should not return an array in numerical order", function () {
      //var output = scrambledNumberGenerator.scrambledNumberGenerator(5);
      //output.should.not.equal([0, 1, 2, 3, 4]);
      //scrambledNumberGenerator(5).should.not.equal([0, 1, 2, 3, 4]);
      expect(scrambledNumberGenerator(5)).to.not.equal([0,1,2,3,4]);
  });

  var array = scrambledNumberGenerator(5);
  it("should not include n", function () {
      //var array = scrambledNumberGenerator(5);
      //var output = scrambledNumberGenerator.scrambledNumberGenerator(5);
      expect(array).to.not.include.members([5]);
  });

  it("should not include numbers greater than n", function () {
      //var array = scrambledNumberGenerator(5);
      //var output = scrambledNumberGenerator.scrambledNumberGenerator(5);
      expect(array).to.not.include.members([10, 50, 1242]);
  });

  it("should return an empty array if n is not a number", function () {
      var noNum = 'string';
      expect(scrambledNumberGenerator(noNum)).to.deep.equal([]);
  });
});