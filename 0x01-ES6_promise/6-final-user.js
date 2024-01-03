import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  uploadPhoto(fileName);
  signUpUser(firstName, lastName);
  return new Promise(() => {
  });
}
