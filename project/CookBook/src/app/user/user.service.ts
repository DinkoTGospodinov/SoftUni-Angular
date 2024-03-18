import { Injectable } from '@angular/core';
import { User, UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;

  user_key = '[user]';

  get isLogged():boolean{
    return !!this.user
  }

  constructor() {
    try {
      const isUser = localStorage.getItem(this.user_key) || '';
      this.user = JSON.parse(isUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {

    this.user = {
      firstName:'Petko',
      email:'petkoivanov@abv.bg',
      passWord:'121212',
      phoneNumber:'1233454'
    }
    localStorage.setItem(this.user_key, JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.user_key);
  }
}
