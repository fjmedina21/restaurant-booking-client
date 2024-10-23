import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const IsAdmin: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.getRole().match('ADMIN')) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};

export const IsDoctor: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.getRole().match('USER')) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};

