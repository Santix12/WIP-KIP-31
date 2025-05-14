const CoreUtilities = require('../../src/core-utilities');

describe('CoreUtilities', () => {
  describe('validateInput', () => {
    test('should return true for non-empty string', () => {
      expect(CoreUtilities.validateInput('hello')).toBe(true);
    });

    test('should return false for empty string', () => {
      expect(CoreUtilities.validateInput('   ')).toBe(false);
    });

    test('should throw error for non-string input', () => {
      expect(() => CoreUtilities.validateInput(123)).toThrow('Input must be a string');
    });
  });

  describe('safeJsonParse', () => {
    test('should parse valid JSON', () => {
      const jsonString = '{"key": "value"}';
      expect(CoreUtilities.safeJsonParse(jsonString)).toEqual({key: 'value'});
    });

    test('should return null for invalid JSON', () => {
      const invalidJsonString = '{invalid json}';
      expect(CoreUtilities.safeJsonParse(invalidJsonString)).toBeNull();
    });
  });
});