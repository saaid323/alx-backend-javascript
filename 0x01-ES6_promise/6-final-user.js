import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photoPromise = uploadPhoto(fileName);
  const userPromise = signUpUser(firstName, lastName);

  return Promise.allSettled([photoPromise, userPromise]).then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return {
        status: 'fulfilled',
        value: result.value,
      };
    }
    return {
      status: 'rejected',
      value: result.reason.message,
    };
  }));
}
