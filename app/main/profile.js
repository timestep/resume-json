// import { createTextNode } from '../html-modifiers';
// import { objectStringDiv, divValue } from './utils';
// import { education } from './education';

export const profile = profileJSON => {
  const profileNode = document.createElement('div');

  const profile = jsonBuilder(profileJSON);

  // const socialNodes = objectStringDiv('h2', 'h3', profileJSON.social);
  // // const educationComponents = education(profileJSON.education);
  // const nameNode = createTextNode('h1', profileJSON.name.join(' '));

  profileNode.appendChild(profile);
  // socialNodes.forEach(x => profileNode.appendChild(x));
  // educationNode.appendChild(educationComponents);
  return profileNode;
};
