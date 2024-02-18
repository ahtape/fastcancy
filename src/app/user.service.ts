import { Injectable } from "@angular/core";
import { UserProfile } from "@angular/fire/auth";
import { Firestore } from "@angular/fire/firestore";
import { doc, setDoc } from "@firebase/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./welcome/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    get currentUserProfile$(): Observable<UserProfile | null> {
        return ///
    }

    constructor(private firestore: Firestore, private authService: AuthService) {}

    addUser(user: UserProfile) {
        // const ref = doc(this.firestore, 'users', user?.uid)
        // return from(setDoc(ref, user));

        console.log(user?.uid)
    }
}