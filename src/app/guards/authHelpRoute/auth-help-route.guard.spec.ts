import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authHelpRouteGuard } from './auth-help-route.guard';

describe('authHelpRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authHelpRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
