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

// Modify map to create map2 with the specified changes
export const map2 = map
  .set(2, 'Benjamin')  // Modify the value for index 2 to 'Benjamin'
  .set(4, 'Oliver');   // Modify the value for index 4 to 'Oliver'


