import { createTextNode } from '../../html-modifiers';

export const jsonBuilder = (title, json) => {
  return Object.keys(json).reduce(jsonReducer(json), []);
};

const arrayJsonBuilder = (title, arrayJson) => {
  return arrayJson.reduce(jsonReducer(arrayJson), []);
};

const jsonReducer = json => (acc, key) => {
  switch (typeof json[key]) {
    case 'string':
    case 'number':
      return acc
        .concat(createTextNode('h3', key))
        .concat(createTextNode('div', json[key]));

    case 'object':
      if (Array.isArray(json[key])) {
        return acc
          .concat(createTextNode('h2', key))
          .concat(arrayJsonBuilder(key, json[key]));
      } else {
        return acc
          .concat(createTextNode('h2', key))
          .concat(jsonBuilder(key, json[key]));
      }
    case 'undefined':
      if (typeof key === 'string' || typeof key === 'number') {
        return acc.concat(createTextNode('div', key));
      }
      if (Array.isArray(json)) {
        return acc
          .concat(createTextNode('h2', key))
          .concat(arrayJsonBuilder(key, json));
      }
      break;
    default:
      console.log('Sorry, we are out of Mangos');
  }
};
