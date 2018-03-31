import resume from '../../assets/resume.json';
import { jsonBuilder, arrayJsonBuilder } from './jsonBuilder';

export const main = () => {
  const profile = jsonBuilder(resume.profile);
  const experience = jsonBuilder(resume.experience);
  const education = resume.education.map(x => jsonBuilder(x));

  profile.forEach(x => document.body.appendChild(x));
  education.forEach(loopAppend);
  experience.forEach(x => document.body.appendChild(x));
};

const loopAppend = x => {
  if (Array.isArray(x)) {
    return x.forEach(loopAppend);
  }
  return document.body.appendChild(x);
};
