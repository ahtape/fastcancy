import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostJobComponent } from './explore-page/post-job/post-job.component';
import { FindJobComponent } from './explore-page/find-job/find-job.component';
import { JobListComponent } from './explore-page/find-job/job-list/job-list.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CreatedJobComponent } from './job-page/created-job/created-job.component';
import { AppliedJobComponent } from './job-page/applied-job/applied-job.component';
import { CreatedJobDescriptionComponent } from './job-page/created-job-description/created-job-description.component';
import { ApplicantProfileComponent } from './job-page/applicant-profile/applicant-profile.component';
import { AppliedJobDescriptionComponent } from './job-page/applied-job-description/applied-job-description.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { CreateJobComponent } from './explore-page/create-job/create-job.component';
import { CreatedJobListComponent } from './job-page/created-job-list/created-job-list.component';
import { AppliedJobListComponent } from './job-page/applied-job-list/applied-job-list.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileEditComponent } from './profile-page/profile-edit/profile-edit.component';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './welcome/auth/auth.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PostJobComponent,
    FindJobComponent,
    JobListComponent,
    JobPageComponent,
    CreatedJobComponent,
    AppliedJobComponent,
    CreatedJobDescriptionComponent,
    ApplicantProfileComponent,
    AppliedJobDescriptionComponent,
    ExplorePageComponent,
    CreateJobComponent,
    CreatedJobListComponent,
    AppliedJobListComponent,
    ProfilePageComponent,
    ProfileEditComponent,
    WelcomeComponent,
    AuthComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
