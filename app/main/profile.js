import { createTextNode } from '../html-modifiers';

export const profile = profileJSON => {
  const profileNode = document.createElement('div');
  const name = createTextNode('h1', profileJSON.name.join(' '));

  const socialDivs = Object.keys(profileJSON.social).reduce((acc, key) => {
    const text = profileJSON.social[key];
    const parentNode = document.createElement('div');
    const titleNode = createTextNode('h2', key);
    const textNode = createTextNode('h3', text); //mostly links. should rename json to announce this.
    parentNode.appendChild(titleNode);
    parentNode.appendChild(textNode);
    return acc.concat(parentNode);
  }, []);

  profileNode.appendChild(name);
  socialDivs.forEach(x => profileNode.appendChild(x));

  return profileNode;
};
