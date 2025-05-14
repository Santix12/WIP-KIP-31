/**
 * Core utility functions for the KIP-31 project
 */
class CoreUtilities {
  /**
   * Validate input string
   * @param {string} input - Input string to validate
   * @returns {boolean} - Whether input is valid
   */
  static validateInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string');
    }
    return input.trim().length > 0;
  }

  /**
   * Safely parse JSON
   * @param {string} jsonString - JSON string to parse
   * @returns {object|null} - Parsed JSON or null
   */
  static safeJsonParse(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }
}

module.exports = CoreUtilities;