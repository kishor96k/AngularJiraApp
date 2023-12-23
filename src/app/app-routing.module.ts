import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    component: LayoutComponent,
    children: [{
      path: 'projects',
      component: ProjectsComponent
    }, {
      path: 'users',
      component: UsersComponent
    }, {
      path: 'board',
      component: BoardComponent
    }]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
