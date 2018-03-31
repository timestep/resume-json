import resume from '../../assets/resume.json';
import { jsonBuilder } from './jsonBuilder';

export const main = () => {
  console.log(resume);
  // const profile = jsonBuilder('profile', resume.profile);
  // const experience = jsonBuilder('experience', resume.experience);
  const education = jsonBuilder(resume.education);

  // profile.forEach(x => document.body.appendChild(x));
  education.forEach(x => document.body.appendChild(x));
  // document.body.appendChild(experience);
};
