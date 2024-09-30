import { Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';

export const routes: Routes = [
  {
    path: '',
    component: TasklistComponent
  },
  {
    path:'**',
    redirectTo: '',
  }
];
