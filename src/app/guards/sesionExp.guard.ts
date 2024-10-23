import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { JWTService } from '../shared/services/jwt.service';
import { JWTPayload } from '../shared/interfaces/jwtPayload.interface';

export const sessionExp: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const jwt = inject(JWTService);

  const current_time = new Date().getTime() /1000;
  const payload: JWTPayload = jwt.DecodeToken(auth.getToken()!);

  if (current_time > payload.exp) {
    alert("Expired Session")
    auth.logout()
    return false;
  }
  return true;
};
