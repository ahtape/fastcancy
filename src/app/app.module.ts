import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
    },
  
  // Profile page
  { 
    path: 'profile', 
    component: ProfilePageComponent 
    },
  { 
    path: 'profile/edit', 
    component: ProfileEditComponent 
    },

  // Explore page
  { 
    path: 'explore', 
    component: ExplorePageComponent 
    },
  { 
    path: 'create', 
    component: CreateJobComponent 
    },

  // Job Page
  { 
    path: 'job',
    component: JobPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'created',
        pathMatch: 'full'
        },
      { 
        path: 'created',
        component: CreatedJobListComponent
        },
      { 
        path: 'applied', 
        component: AppliedJobListComponent 
        },
    ]
    },
  { 
    path: 'job/created/details', 
    component: CreatedJobDescriptionComponent 
    },
  { 
    path: 'job/created/details/applicant', 
    component: ApplicantProfileComponent 
    },
  { 
    path: 'job/applied/details', 
    component: ApplicantProfileComponent 
    },
];

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
    ProfileEditComponent
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
