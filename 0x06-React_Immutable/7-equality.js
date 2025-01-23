mport { Map, is } from 'immutable';

/**
 * Compares two Immutable Maps for equality.
 * @param {Map} map1 - The first Map to compare.
 * @param {Map} map2 - The second Map to compare.
 * @returns {boolean} - Returns true if the Maps are equal, otherwise false.
 */
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
