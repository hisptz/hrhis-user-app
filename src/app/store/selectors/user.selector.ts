import { createSelector } from '@ngrx/store';
import * as fromMainReducer from '../reducers';
import * as fromUserStateReducer from '../reducers/user.reducer';

export const getUserState = createSelector(
    fromMainReducer.getRootState,
    (state: fromMainReducer.AppState) => state.user
);

export const getUsersList = createSelector(
    getUserState,
    fromUserStateReducer.getUsersListState
);

export const getUseronListInfo = createSelector(
    getUserState,
    fromUserStateReducer.getUseronListInfoState
);

export const getUsersNotification = createSelector(
    getUserState,
    fromUserStateReducer.getUsersNotificationState
);


