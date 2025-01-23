import { Map } from 'immutable';

/**
 * Merges two objects deeply and returns the values in a List.
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {List} - An Immutable List containing the merged values.
 */

export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  const merged = map1.mergeDeep(map2);

  return merged.toList();
}
