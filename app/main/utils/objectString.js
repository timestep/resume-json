import { createTextNode } from '../../html-modifiers';

export const objectStringDiv = (keyDiv, valueDiv, socialValues) =>
  Object.keys(socialValues).reduce((acc, key) => {
    const text = socialValues[key];
    const parentNode = document.createElement('div');
    const titleNode = createTextNode(keyDiv, key);
    const textNode = createTextNode(valueDiv, text); //mostly links. should rename json to announce this.
    parentNode.appendChild(titleNode);
    parentNode.appendChild(textNode);
    return acc.concat(parentNode);
  }, []);
