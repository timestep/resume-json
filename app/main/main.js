import resume from '../../assets/resume.json';
import { createTextDiv } from '../../html-modifiers';

export const main = () => {
  console.log('hi');

  console.log(resume);
  console.log(JSON.stringify(resume));

  var title = createTextDiv('title');
  document.body.appendChild(title);
};
