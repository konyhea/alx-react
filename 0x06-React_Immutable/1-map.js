import {Map} from 'immutable'

/**
 * Converts a plain JavaScript object into an Immutable.js Map.
 * @param {Object} object - The plain JavaScript object.
 * @returns {Map} - Immutable.js Map representation of the object.
 */

export  function getImmutableObject(object) {
	return Map(object);
}

