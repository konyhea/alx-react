import { Map } from 'immutable';

/**
 * Merges two objects deeply and returns the values in a List.
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {List} - An Immutable List containing the merged values.
 */
export function mergeDeeplyElements(page1, page2) {
    // Convert the objects to Immutable Maps
    const map1 = Map(page1);
    const map2 = Map(page2);

    // Perform a deep merge
    const merged = map1.mergeDeep(map2);

    // Convert the merged Map to a List and return it
    return merged.toList();
}

