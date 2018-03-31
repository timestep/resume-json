import { createTextNode } from '../html-modifiers';
import { objectStringDiv, divValue } from './utils';

export const profile = profileJSON => {
  const profileNode = document.createElement('div');

  const nameNode = createTextNode('h1', profileJSON.name.join(' '));
  const socialNodes = objectStringDiv('h2', 'h3', profileJSON.social);

  profileNode.appendChild(nameNode);
  socialNodes.forEach(x => profileNode.appendChild(x));

  return profileNode;
};
