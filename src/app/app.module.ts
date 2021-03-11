import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageFestivalComponent } from './manage-festival/manage-festival.component';
import { HttpClientModule } from '@angular/common/http';
import { FestivalService } from './festival.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { SingleFestivalComponent } from './festival-list/single-festival/single-festival.component';
import { FestivalFormComponent } from './festival-list/festival-form/festival-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageFestivalComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    SingleFestivalComponent,
    FestivalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FestivalService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
