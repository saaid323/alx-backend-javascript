import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);
  const all = [photo, user];
  try {
    return Promise.allSettled(all)
      .then((results) => results.map((result) => ({
        status: result.status,
        value: result[1],
      })));
  } catch (error) {
    return [{ status: result.status, value: error.message }];
  }
}
