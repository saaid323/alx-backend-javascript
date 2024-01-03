import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let all = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    all = { photo: { ...photo }, user: { ...user } };
  } catch (error) {
    all = { photo: null, user: null };
  }
  return all;
}
