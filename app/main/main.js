import resume from '../../assets/resume.json';
import { profile } from './profile';
export const main = () => {
  console.log(resume);
  const profileEl = profile(resume.profile);
  document.body.appendChild(profileEl);
};
