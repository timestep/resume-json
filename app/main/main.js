import resume from '../../assets/resume.json';
import { createTextDiv } from '../html-modifiers';

export const main = () => {
  console.log('hi');

  console.log(resume);

  var title = createTextDiv(JSON.stringify(resume));
  document.body.appendChild(title);
};
