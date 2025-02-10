"use server"

import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

export async function addStore(agentData) {
	try {
		await addDoc(collection(db, "stores"), agentData)
		return { success: true }
	} catch (error) {
		console.log("Error adding agent:", error)
		throw new Error("Failed to add agent.")
	}
}
export async function getStores() {
	const storeRef = collection(db, "stores")
	const snapshot = await getDocs(storeRef)
	const stores = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}))
	return stores
}
export async function fetchCategoryAndStoreNumber() {
	const storeRef = collection(db, "stores")
	const snapshot = await getDocs(storeRef)
	const storesList = snapshot.docs.map((doc) => ({
		storeNumber: doc.data().storeNumber,
		category: doc.data().category,
	}))
	return storesList
}
