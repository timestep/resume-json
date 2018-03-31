import { createTextNode } from '../../html-modifiers';
import { flatten } from 'ramda';

export const jsonBuilder = json => {
  const x = Object.keys(json).reduce(jsonReducer(json), []);
  return flatten(x);
};

export const arrayJsonBuilder = arrayJson => {
  const x = arrayJson.reduce(jsonReducer(arrayJson), []);
  return flatten(x);
};

const jsonReducer = json => (acc, key) => {
  switch (typeof json[key]) {
    case 'string':
    case 'number':
      return acc.concat(createTextNode('div', json[key]));

    case 'object':
      if (Array.isArray(json[key])) {
        return acc.concat(arrayJsonBuilder(json[key]));
      } else {
        return acc.concat(jsonBuilder(json[key]));
      }
    case 'undefined':
      if (typeof key === 'string') {
        return acc.concat(createTextNode('div', key));
      }
      if (Array.isArray(json)) {
        const x = json.map(x => jsonBuilder(x));
        return acc.concat(x);
      }
    default:
      console.log('Sorry, we are out of Mangos');
  }
};
