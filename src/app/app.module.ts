import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPortalComponent } from './patient-portal/patient-portal.component';
import { PhysicianPortalComponent } from './physician-portal/physician-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { FormsModule } from '@angular/forms';
import {Http} from '@angular/http'
import { NgChatModule } from 'ng-chat';
import { HttpModule } from '@angular/http';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { HttpClientModule } from '@angular/common/http';
const config: SocketIoConfig = { url: '/', options: {} };
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyDialogComponent } from './survey-dialog/survey-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientPortalComponent,
    PhysicianPortalComponent,
    AdminPortalComponent,
    SurveyDialogComponent,
    SurveyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgChatModule,
    SocketIoModule.forRoot(config)
  ],
  entryComponents: [SurveyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
