// Test Suite - It is a collection of TestCases
describe("CalcTestSuite", function() {
  var calcModel;
  
// It will always execute before any testcase    
  beforeEach(function() {
    calcModel = new Calculator();
  });

  // This is a TestCase
    it("add two numbers", function() {
    var expectedResult = 100;
    calcModel.set("firstNumber",50);
    calcModel.set("secondNumber",50);
    var result = calcModel.add();    
    expect(expectedResult).toEqual(result);

   
  });  // TestCase Ends Here
    
it("checking reset", function() {
    var expectedResult = 0;
    
    calcModel.reset();   
    expect(expectedResult).toEqual(calcModel.get("firstNumber"));
    expect(expectedResult).toEqual(calcModel.get("secondNumber"));

   
  });     
}); // Test Suite Ends Here
    