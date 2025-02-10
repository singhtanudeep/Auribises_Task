import { getAuth } from "firebase/auth"
import { app } from "./src/app/lib/firebase"
import { NextResponse } from "next/server"
const auth = getAuth(app)
export function middleware(req) {
	const user = auth.currentUser
	console.log(user)

	if (!user) {
		//if no user then redirect to login page
		return NextResponse.redirect(new URL("/login", req.url))
	}
	//if user then redirect to any other page
	return NextResponse.next()
}
export const congif = {
	matcher: ["/dashboard"],
}
