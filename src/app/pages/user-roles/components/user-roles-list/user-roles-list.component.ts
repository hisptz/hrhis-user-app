import { Component, OnInit } from '@angular/core';
import { dummyUserroles } from 'src/assets/config/dummy-user-roles';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { getUserRolesList } from '../../../../store/selectors';
import { Observable } from 'rxjs';
import { LoadUserRoles, UpdateUserRole, FetchSingleUserRole, FetchUserAuthorities } from '../../../../store/actions';

@Component({
  selector: 'app-user-roles-list',
  templateUrl: './user-roles-list.component.html',
  styleUrls: ['./user-roles-list.component.css']
})
export class UserRolesListComponent implements OnInit {

  userRoles$: Observable<any>;
  page = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadUserRoles());
    this.store.dispatch(new FetchUserAuthorities());
    this.userRoles$ = this.store.select(getUserRolesList);
  }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return item.id;
  }

  onUpdatePageSize(e) {
    this.itemsPerPage = e;
  }

  onCurrentPageUpdate(e) {
    this.page = e;
  }

  searchingItems(e) {
    if (e) {
      e.stopPropagation();
    }
    this.searchText = e ? e.target.value.trim() : this.searchText;
  }

  editUserRole(userRole) {
    this.store.dispatch(new UpdateUserRole(userRole));
    console.log(userRole);
    location.href = '#/userRoles/edit/' + userRole.id;
    this.store.dispatch(new FetchSingleUserRole());
  }

}
