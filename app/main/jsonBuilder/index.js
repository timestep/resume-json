import { createTextNode } from '../../html-modifiers';

export const jsonBuilder = json => {
  return Object.keys(json).reduce(jsonReducer(json), []);
};

const arrayJsonBuilder = arrayJson => {
  return arrayJson.reduce(jsonReducer(arrayJson), []);
};

const jsonLoop = j => {
  if (typeof j === 'string') {
    return createTextNode('div', j);
  }
  if (Array.isArray(j)) {
    return json.map(jsonLoop);
  }

  if (typeof j === 'object' && !Array.isArray(j)) {
    return jsonBuilder(j);
  }
};

const jsonReducer = json => (acc, key) => {
  debugger;
  if (typeof json === 'string') {
    return acc.concat(createTextNode('div', key));
  }
  if (Array.isArray(json)) {
    debugger;
    return acc.concat(json.map(jsonLoop));
    // debugger;
    // return (
    //   acc
    //     // .concat(createTextNode('h2', key))
    //     .concat(arrayJsonBuilder(json))
    // );
  }

  switch (typeof json[key]) {
    case 'string':
    case 'number':
      return acc
        .concat(createTextNode('h3', key))
        .concat(createTextNode('div', json[key]));

    case 'object':
      if (Array.isArray(json[key])) {
        debugger;
        return acc
          .concat(createTextNode('h2', key))
          .concat(arrayJsonBuilder(json[key]));
      } else {
        return acc
          .concat(createTextNode('h2', key))
          .concat(jsonBuilder(json[key]));
      }
    case 'undefined':
      if (typeof key === 'string') {
        return acc.concat(createTextNode('div', key));
      }
    default:
      console.log('Sorry, we are out of Mangos');
  }
};
