import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './pages/users/components/users-list/users-list.component';
import { UserRolesComponent } from './pages/users-roles/components/user-roles-list/user-roles-list.component';
import { UserGroupsComponent } from './pages/user-groups/user-groups.component';
import { AddUserComponent } from './pages/users/components/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/addUser',
    component: AddUserComponent
  },
  {
    path: 'users/editUser/:userId',
    component: AddUserComponent
  },
  {
    path: 'userroles',
    component: UserRolesComponent
  },
  {
    path: 'usergroups',
    component: UserGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
