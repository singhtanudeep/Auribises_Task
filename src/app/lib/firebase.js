import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: "AIzaSyBYaGqIPLIkmzDJHGr1F0G6BzmXX_kxXnU",
	authDomain: "airportadminpanel.firebaseapp.com",
	projectId: "airportadminpanel",
	storageBucket: "airportadminpanel.firebasestorage.app",
	messagingSenderId: "591469954507",
	appId: "1:591469954507:web:6fd5725acc04cb24bf224e",
	measurementId: "G-GKPWK5REJQ",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
// export const storage = getStorage(app)
