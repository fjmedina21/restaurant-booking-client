import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const IsNotLogged: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  auth.checkIsLoggedIn();

  if (!auth.IsLoggedIn()) {
    router.navigate(['/auth']);
    return false;
  }


  return true;
};

export const IsLogged: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  auth.checkIsLoggedIn();

  if (auth.IsLoggedIn()) {
    router.navigate(['/']);
    return false;
  }

  return true;
};

