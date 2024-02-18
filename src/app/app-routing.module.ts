import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { AuthComponent } from './welcome/auth/auth.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileEditComponent } from './profile-page/profile-edit/profile-edit.component';
import { CreateJobComponent } from './explore-page/create-job/create-job.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CreatedJobListComponent } from './job-page/created-job-list/created-job-list.component';
import { AppliedJobListComponent } from './job-page/applied-job-list/applied-job-list.component';
import { CreatedJobDescriptionComponent } from './job-page/created-job-description/created-job-description.component';
import { ApplicantProfileComponent } from './job-page/applicant-profile/applicant-profile.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, children: [
    {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'prefix'
      },
    { 
      path: 'auth', 
      component: AuthComponent 
      }
  ] },

  { 
    path: 'main',
    component: MainComponent,
    children: [
      
    {
      path: '',
      redirectTo: 'explore',
      pathMatch: 'prefix'
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
    path: 'explore/create', 
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
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
