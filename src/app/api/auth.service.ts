import { Injectable } from '@angular/core';

//Services
import { RequestService } from '../services/request.service';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private request: RequestService
  ) { }

  login(email: string, password: string) {
    return this.request.post('/auth/login', { email, password });
  }

  createAccount(data: User) {
    return this.request.post('/user/create', data);
  }
}
