export default function getFullResponseFromAPI(success) {
  return new Promise((reject, resolve) => {
    if (success) {
      // eslint-disable-next-line prefer-promise-reject-errors
      resolve({ status: 200, body: 'Success' });
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(new Error('The fake API is not working currently'));
    }
  });
}
