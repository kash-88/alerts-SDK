/**
 * Checks if a value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 * @private
 */
function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Validates that the provided data is an object and contains the required keys.
 * For each required key, it also validates that the value is a string or a number.
 * @param {object} data - The data object to validate.
 * @param {string[]} requiredKeys - An array of keys that must be present in the data object.
 * @throws {Error} If validation fails.
 * @private
 */
export function validateDataObject(data, requiredKeys) {
    if (!isObject(data)) {
        throw new Error('You must provide data as an object.');
    }

    for (const key of requiredKeys) {
        if (!data[key]) {
            throw new Error(`You must provide "${key}" in the data object.`);
        }

        if (typeof data[key] === 'number') {
            data[key] = String(data[key]);
        } else if (typeof data[key] !== 'string') {
            throw new Error(`"${key}" must be a string or a number.`);
        }
    }
} 