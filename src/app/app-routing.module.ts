import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

import {SignUpComponent} from './signup/signup.component';
import {DashboardcustComponent} from './customer/dashboardcust/dashboardcust.component';
import {DashboardAdminComponent} from './admin/dashboard-admin/dashboard-admin.component';
import {PageComponent} from './page/page.component';

import {ProfileComponent} from './profile/profile.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {AboutComponent} from './page/about/about.component';
import {ActivityComponent} from './page/activity/activity.component';
import {ProjectsComponent} from './page/projects/projects.component';
import {CustomertableComponent} from './customertable/customertable.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {CustomerserviceDashboardComponent} from './customerservice-dashboard/customerservice-dashboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MapComponent} from './map/map.component';
import {MessagingComponent} from './messaging/messaging.component';
import {InvoicePrintComponent} from './invoice-print/invoice-print.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {AdduserComponent} from './adduser/adduser.component';
import {CartComponent} from './cart/cart.component';
import {DeliveryagentDashboardComponent} from "./deliveryagent-dashboard/deliveryagent-dashboard.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {OrderComponent} from "./order/order.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'home',
    pathMatch: 'full',
  },


  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignUpComponent

  },

  {
    path: 'dashboardcust', component: DashboardcustComponent,
    children: [
      {path: '', component: AdduserComponent},
      {path: 'products', component: AddproductComponent},
      {path: 'invoice', component: InvoiceComponent},
      {path: 'invoicePrint', component: InvoicePrintComponent},
      {path : 'reservation', component: ReservationComponent},

      {path: 'cart', component: CartComponent},
      {path: 'customerService', component: CustomerserviceDashboardComponent},
      {path: 'customertable', component: CustomertableComponent},
      {path: 'deliveryAgent', component: DeliveryagentDashboardComponent},
      // {path: 'editeProdute', component: EditproductComponent},
      {path : 'order', component: OrderComponent},
      {path : 'category', component: CategoryComponent},
      {path: 'map', component: MapComponent},
      {path: 'messaging', component: MessagingComponent},
      {path: 'profile', component: ProfileComponent},

    ]
  },
  {
    path: 'homepage',
    component: HomepageComponent

  },

  {
    path: '',
    component:PageComponent, children:[

      {
        path: 'activity',
        component:ActivityComponent

      },

      {
        path: 'about',
        component:AboutComponent

      },

    ]
  },


  {
    path: 'DashboardAdmin',
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
