/**
 * Checks if a value is a plain object.
 * @param {unknown} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 * @private
 */

function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Validates that the provided data is an object and contains the required keys.
 * For each required key, it also validates that the value is a string or a number.
 * @param {unknown} data - The data object to validate.
 * @param {string[]} requiredKeys - An array of keys that must be present in the data object.
 * @throws {Error} If validation fails.
 * @private
 */

export function validateDataObject(data: unknown, requiredKeys: string[]): asserts data is Record<string, string | number | string[]> {
    if (!isObject(data)) {
        throw new Error("You must provide data as an object.");
    }

    for (const key of requiredKeys) {
        if (!(key in data) || data[key] === undefined || data[key] === null) {
            throw new Error(`You must provide "${key}" in the data object.`);
        }

        const value = data[key];

        if (key === "scope") {
            if(!Array.isArray(value)) {
                throw new Error(`"${key}" must be an array of strings.`);
            }
            continue;
        }

        if (typeof value !== "string" && typeof value !== "number") {
            throw new Error(`"${key}" must be a string or a number.`);
        }
    }
}