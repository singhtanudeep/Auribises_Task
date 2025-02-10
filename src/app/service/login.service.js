import { toast } from "react-toastify"
import {
	getAuth,
	signInWithEmailAndPassword,
	updateEmail,
	updatePassword,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth"
import { app } from "../lib/firebase"

const auth = getAuth(app)

// Login function
export const loginService = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		)
		if (userCredential) {
			return userCredential
		}
	} catch (error) {
		toast.error(error.message)
	}
}

export default auth
