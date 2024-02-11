import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { PostJobComponent } from './explore-page/post-job/post-job.component';
import { FindJobComponent } from './explore-page/find-job/find-job.component';
import { JobListComponent } from './explore-page/find-job/job-list/job-list.component';
import { PostJobCreateComponent } from './explore-page/post-job-create/post-job-create.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CreatedJobComponent } from './job-page/created-job/created-job.component';
import { AppliedJobComponent } from './job-page/applied-job/applied-job.component';
import { JobDescriptionComponent } from './job-page/job-description/job-description.component';
import { ApplicantProfileComponent } from './job-page/applicant-profile/applicant-profile.component';
import { AppliedJobDescriptionComponent } from './job-page/applied-job-description/applied-job-description.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ExplorePageComponent},
];

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
    AppliedJobDescriptionComponent,
    ExplorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
