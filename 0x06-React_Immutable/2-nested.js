import {getIn} from 'immutable';

/**
 * get the value from an object using getIn.
 * @param {Object} object - The plain JavaScript object.
 * @returns value from an object
 */


export default function accessImmutableObject(object, array) {
        return getIn([object, array]);
}

ChatGPT
