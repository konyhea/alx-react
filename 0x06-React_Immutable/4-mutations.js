import { Map } from 'immutable';

// Create the first Immutable Map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Use withMutations to apply the changes before returning
export const map2 = map.withMutations((tempMap) => {
  tempMap.set(2, 'Benjamin').set(4, 'Oliver');
});
