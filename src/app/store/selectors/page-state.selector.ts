import { createSelector } from '@ngrx/store';
import * as fromMainReducer from '../reducers';
import * as fromPageStateReducer from '../reducers/page-state.reducer'

export const getPageState = createSelector(
    fromMainReducer.getRootState,
    (state: fromMainReducer.AppState) => state.pageState
);

export const getPageStateCurrentSelection = createSelector(
    getPageState,
    fromPageStateReducer.getCurrentSectionState
);

export const getUserSections = createSelector(
    getPageState,
    fromPageStateReducer.getUserSectionsState
);
