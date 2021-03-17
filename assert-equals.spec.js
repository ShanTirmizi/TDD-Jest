const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('function exists', () => {
    it("assertEquals function should exist", () => {
      expect(assertEquals).toBeDefined();
    });
  })
  describe('when expected and actual are the same string', () => {
    it('should return actual and expected as the same string', () => {
      const expected = "abc";
      const actual = "abc";
      expect(() => assertEquals(expected, actual).primitiveData(expected,actual)).not.toThrow()
    })
    it('should return actual and expected as the different string', () => {
      const expected = "abc";
      const actual = "abcef";
      expect(() => assertEquals(expected, actual).primitiveData(expected,actual)).toThrow(`Expected 'abc' but found 'abcef'`)
    })
  })
  describe('when expected and actual are the same number', () => {
    it('should return actual and expected as the same number', () => {
      const expected = 1;
      const actual = 1;
      expect(() => assertEquals(expected, actual).primitiveData(expected,actual)).not.toThrow()
    })
    it('should return actual and expected as different data types and throw error', () => {
      const expected = 1;
      const actual = "1";
      expect(() => assertEquals(expected, actual).primitiveData(expected,actual)).toThrow(`Expected type number but found type string`)
    })
    it('should return actual and expected as different number', () => {
      const expected = 1;
      const actual = 2;
      expect(() => assertEquals(expected, actual).primitiveData(expected,actual)).toThrow(`Expected 1 but found 2`)
    })
  })
  describe('when expected and actual are the same array', () => {
    it('should return actual and expected as the same array', () => {
      const expected = ['a', 'b', 'c'];
      const actual = ['a', 'b','c'];
      expect(() => assertEquals(expected, actual).mutableData(expected, actual)).not.toThrow()
    })
    it('should return actual and expected to be different lengths and throw error', () => {
      const expected = ['a', 'b', 'c'];
      const actual = ['a','c'];
      expect(() => assertEquals(expected, actual).mutableData(expected, actual)).toThrow(`Expected array length 3 but found 2`)
    })
    it('should return actual and expected to be different vales and throw error', () => {
      const expected = ['r', 'b', 'c', 'd'];
      const actual = ['a', 'b', 'c', 'e'];
      expect(() => assertEquals(expected, actual).mutableData(expected, actual)).toThrow(`Expected r,d but found a,e`)
    })
  })
  describe('checking if data is data type', () => {
    it('should return actual and expected as the same string', () => {
      const expected = "abc";
      const actual = "abc";
      expect(() => assertEquals(expected, actual).primitiveData(expected,actual)).not.toThrow()
    })
  })
})