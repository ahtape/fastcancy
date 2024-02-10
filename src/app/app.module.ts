import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { PostJobComponent } from './post-job/post-job.component';
import { FindJobComponent } from './find-job/find-job.component';
import { JobListComponent } from './find-job/job-list/job-list.component';
import { PostJobCreateComponent } from './post-job-create/post-job-create.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CreatedJobComponent } from './job-page/created-job/created-job.component';
import { AppliedJobComponent } from './job-page/applied-job/applied-job.component';
import { JobDescriptionComponent } from './job-page/job-description/job-description.component';
import { ApplicantProfileComponent } from './job-page/applicant-profile/applicant-profile.component';
import { AppliedJobDescriptionComponent } from './job-page/applied-job-description/applied-job-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PostJobComponent,
    FindJobComponent,
    JobListComponent,
    PostJobCreateComponent,
    JobPageComponent,
    CreatedJobComponent,
    AppliedJobComponent,
    JobDescriptionComponent,
    ApplicantProfileComponent,
    AppliedJobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
