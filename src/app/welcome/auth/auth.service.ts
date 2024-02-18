import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError } from "rxjs";
import { User } from "./user.model";
import { environment } from "../../../environments/environment";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

export class Item {
    body: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    user = new Subject<User>();

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http
        .post<AuthResponseData>(
            environment.signup,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
            );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            environment.signin,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }
}