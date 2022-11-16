import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'This action means signed in' };
  }

  signup() {
    return { msg: 'This action means signed up' };
  }
}
