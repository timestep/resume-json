import { createTextNode } from '../../html-modifiers';

export const jsonBuilder = (title, json) => {
  const node = createTextNode('div', title);
  Object.keys(json)
    .reduce(jsonReducer(json), [])
    .forEach(x => node.appendChild);
  return node;
};

const arrayJsonBuilder = (title, arrayJson) => {
  const node = createTextNode('div', title);
  arrayJson
    .reduce(jsonReducer(arrayJson), [])
    .forEach(x => node.appendChild(x));
  return node;
};

const jsonReducer = json => (acc, key) => {
  switch (typeof json[key]) {
    case 'string':
      acc.push(createTextNode('h3', key));
      acc.push(createTextNode('div', json[key]));
      break;
    case 'object':
      if (Array.isArray(json[key])) {
        acc.push(createTextNode('h2', key));
        return arrayJsonBuilder(key, json[key]);
      } else {
        acc.push(createTextNode('h2', key));
        return jsonBuilder(key, json[key]);
      }
    case 'undefined':
      switch (typeof key) {
        case 'string':
          acc.push(createTextNode('div', key));
          return acc;
      }
      break;
    default:
      console.log('Sorry, we are out of Mangos');
  }
};
