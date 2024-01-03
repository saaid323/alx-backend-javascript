import { uploadPhoto, createUser } from './utils'
export default function handleProfileSignup() {
	if (true) {
		Promise.all([uploadPhoto(), createUser()]).then(([upload, create]) => 
		console.log(upload.body, create.firstName, create.lastName))
	}
}
