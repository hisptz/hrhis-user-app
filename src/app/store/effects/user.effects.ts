import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, withLatestFrom, tap, catchError } from 'rxjs/operators';
import { UserActionTypes, AddUsers, UpdateNotification } from '../actions';
import { of, Observable } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { UserService } from '../../pages/users/services';


@Injectable()
export class USerEffects {

  constructor(private actions$: Actions, private store: Store<AppState>, private userService: UserService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    switchMap((action) => this.userService.fetchUsers()),
    map((response: any) => {
      const usersPayload = response.users ? response.users : [];
      return new AddUsers(usersPayload);
    }),
    catchError(error => of( new UpdateNotification({
        statusCode: error.statusCode,
        message: 'error: ' + error.message
        })
      ))
  );
}
