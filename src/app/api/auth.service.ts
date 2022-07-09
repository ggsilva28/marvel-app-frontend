import { Injectable } from '@angular/core';

//Services
import { RequestService } from '../services/request.service';

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
}
