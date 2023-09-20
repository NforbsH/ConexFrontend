import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './signup/signup.component';
import { DashboardcustComponent } from './customer/dashboardcust/dashboardcust.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { UpdatecustprofileComponent } from './customer/dashboardcust/updatecustprofile/updatecustprofile.component';
import { PageComponent } from './page/page.component';

import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AboutComponent } from './page/about/about.component';
import { ActivityComponent } from './page/activity/activity.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { InnerpageComponent } from './page/innerpage/innerpage.component';
import { CustomertableComponent } from './customertable/customertable.component';

const routes: Routes = [  
  {
    path: ' ',
    redirectTo: 'home',
    pathMatch: 'full',
  },


  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: 'signup',
    component:SignUpComponent 

  },

  {
    path: 'dashboardcust',
    component:DashboardcustComponent 

  },

  {
    path: 'page',
    component:PageComponent
  },


  {
    path: 'dashboard-admin',
    component:DashboardAdminComponent

  },

  {
    path: 'about',
    component:AboutComponent

  },

  {
    path: 'activity',
    component:ActivityComponent

  },

  {
    path: 'customertable',
    component:CustomertableComponent

  },

  {
    path: 'innerpage',
    component:InnerpageComponent

  },

  {
    path: 'projects',
    component:ProjectsComponent

  },

  {
    path: 'updatecustprofile',
    component:UpdatecustprofileComponent

  },

  {
    path: 'invoice',
    component:InvoiceComponent

  },
  
  {
    path: 'profile',
    component:ProfileComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
