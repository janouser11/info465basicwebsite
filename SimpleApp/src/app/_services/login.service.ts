import { Injectable } from '@angular/core';
import {Router} from "@angular/router";


export class User {
  constructor(
    public email: string,
    public password: string) { }

}

let users = [
  new User('admin','admin'),
];

@Injectable()
export class LoginService {

  constructor(private _router: Router) {
  }

  static checkCredentials() {
    if (localStorage.getItem("user") === null) {
      // this._router.navigate(['login']);
    }
  }

  login(user){
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['data-utilization']);
      return true;
    }
    return false;

  }

  loggedIn (): boolean {
    if (localStorage.getItem("user") === null){
      return false;
    }
    return true;
  }

  logout() {
    console.log("inside logout");
    localStorage.removeItem("user");
  }
}


