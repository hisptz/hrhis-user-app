import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, withLatestFrom, tap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { UserActionTypes, AddUsers } from '../actions';


@Injectable()
export class USerEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    switchMap((action) => this.userService.fetchUsers()),
    map((response: any) => {
      const usersPayload = response.users ? response.users : [];
      return new AddUsers(usersPayload);
    })
  );
}