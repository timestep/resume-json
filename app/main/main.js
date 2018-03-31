import resume from '../../assets/resume.json';
import { jsonBuilder } from './jsonBuilder';

export const main = () => {
  console.log(resume);
  const resumeEl = jsonBuilder('Resume', resume);
  document.body.appendChild(resumeEl);
};
