import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);
  const all = [photo, user];
  return Promise.any(all)
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return [{ status: result.status, value: result[1] }];
      }
      return [{ status: result.status, value: result.reason.message }];
    }));
}
