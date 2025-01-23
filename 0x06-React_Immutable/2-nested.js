/**
 * Get the value from an object using a defined path (array of keys).
 * @param {Object} object - The plain JavaScript object.
 * @param {Array} array - An array of keys representing the path.
 * @returns {*} The value from the object at the specified path, or undefined if not found.
 */
export default function accessImmutableObject(object, array) {
    let result = object;

    for (let i = 0; i < array.length; i++) {
        if (result && result.hasOwnProperty(array[i])) {
            result = result[array[i]];  // Traverse down the path
        } else {
            return undefined;  // Return undefined if path does not exist
        }
    }

    return result;  // Return the value at the end of the path
}

