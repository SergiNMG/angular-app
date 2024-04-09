import { CanActivateFn } from '@angular/router';

export const authHelpRouteGuard: CanActivateFn = (route, state) => {
  const confirmNavigation: boolean = window.confirm('¿Desea acceder a la ruta?');
  return confirmNavigation;
};
