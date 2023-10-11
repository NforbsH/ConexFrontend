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
import { CustomertableComponent } from './customertable/customertable.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeliveryagentDashboardComponent } from './deliveryagent-dashboard/deliveryagent-dashboard.component';
import { CustomerserviceDashboardComponent } from './customerservice-dashboard/customerservice-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
import { MessagingComponent } from './messaging/messaging.component';
import { InvoicePrintComponent } from './invoice-print/invoice-print.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CartComponent } from './cart/cart.component';

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

  { path: 'dashboardcust',component:DashboardcustComponent,
  },

  {
    path: 'homepage',
    component:HomepageComponent

  },

  {
    path: 'page',
    component:PageComponent
  },


  {
    path: '',
    component:DashboardAdminComponent, children:[

  {
    path: 'addproduct',
    component:AddproductComponent

  },

  {
    path: 'editproduct',
    component:EditproductComponent

  },

  {
    path: 'profile',
    component:ProfileComponent

  },

  {
    path: 'invoice',
    component:InvoiceComponent

  },


  {
    path: 'adduser',
    component:AdduserComponent

  },


  {
    path: 'invoice-print',
    component:InvoicePrintComponent

  },


    ]

  },


  {
    path: 'customertable',
    component:CustomertableComponent

  },

  {
    path: 'about',
    component:AboutComponent

  },

  {
    path: 'messaging',
    component:MessagingComponent

  },

  {
    path: 'map',
    component:MapComponent

  },


  {
    path: 'cart',
    component:CartComponent

  },

  {
    path: 'activity',
    component:ActivityComponent

  },

  {
    path: 'projects',
    component:ProjectsComponent

  },


  {
    path: 'customerservice-dashboard',
    component:CustomerserviceDashboardComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
