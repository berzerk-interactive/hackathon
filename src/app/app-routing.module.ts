import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPortalComponent } from './patient-portal/patient-portal.component';
import { PhysicianPortalComponent } from './physician-portal/physician-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  { path: 'patient/:id',
    component: PatientPortalComponent
  },
  {
    path: 'physician/:id',
    component: PhysicianPortalComponent
  },
  {
    path: 'admin',
    component: AdminPortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
