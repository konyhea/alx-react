import {List} from 'immutable';


const originalList = List([ 0 ]);
console.log(originalList);
// List [ 0 ]
originalList.set(1);
console.log(originalList);
// List [ 0, 1 ]
originalList.set(0, 'overwritten');
// List [ "overwritten" ]
originalList.set(2, 2);
// List [ 0, undefined, 2 ]

List().set(50000, 'value').size;
