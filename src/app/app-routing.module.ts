import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FestivalFormComponent } from './festival-list/festival-form/festival-form.component';
import { SingleFestivalComponent } from './festival-list/single-festival/single-festival.component';
import { ManageFestivalComponent } from './manage-festival/manage-festival.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'festivals', component: ManageFestivalComponent, canActivate: [AuthGuardService] },
  { path: 'festivals/view:id', component: SingleFestivalComponent, canActivate: [AuthGuardService], },
  { path: 'festivals/new', component: FestivalFormComponent, canActivate: [AuthGuardService], },
  {
    path: '',
    component: ManageFestivalComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
