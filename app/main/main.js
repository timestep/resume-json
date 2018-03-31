import resume from '../../assets/resume.json';
import { jsonBuilder } from './jsonBuilder';

export const main = () => {
  console.log(resume);
  const profile = jsonBuilder('profile', resume.profile);
  const education = jsonBuilder('education', resume.education);
  const experience = jsonBuilder('experience', resume.experience);

  document.body.appendChild(profile);
  document.body.appendChild(education);
  document.body.appendChild(experience);
};
