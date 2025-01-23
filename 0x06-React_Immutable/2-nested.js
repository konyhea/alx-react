import { fromJS, getIn } from 'immutable';

/**
 * Get the value from an object using getIn.
 * @param {Object} object - The plain JavaScript object.
 * @param {Array} array - An array of keys representing the path to the value.
 * @returns The value from the object at the specified path, or undefined 
 */
export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object); // Convert plain JavaScript object to Immutable object
  return getIn(immutableObject, array); // Use getIn to retrieve the value
}
