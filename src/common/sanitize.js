/**
 * Replaces non-alphabetic characters in a string with hyphens
 * @param {string} input String to be sanitized
 * @returns {string} Lowercase sanitized string
 */
const sanitize = input => {

  /** Lowercase input */
  let result = input.toLowerCase();

  // Convert + to " plus"
  result = result.replace(/\+/ig, ' plus');

  // Remove apostrophes
  result = result.replace(/'/ig, '');

  // Convert any non-word characters to a hyphen
  result = result.replace(/\W/ig, '-');

  // Return the sanitized string
  return result;
}

export default sanitize;
