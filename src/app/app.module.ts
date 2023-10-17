import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './signup/signup.component';
import {DashboardcustComponent} from './customer/dashboardcust/dashboardcust.component';
import {DashboardAdminComponent} from './admin/dashboard-admin/dashboard-admin.component';
import {UpdatecustprofileComponent} from './customer/dashboardcust/updatecustprofile/updatecustprofile.component';

import {ProfileComponent} from './profile/profile.component';
import {PageComponent} from './page/page.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {AboutComponent} from './page/about/about.component';
import {ProjectsComponent} from './page/projects/projects.component';
import {ActivityComponent} from './page/activity/activity.component';
import {FooterpageComponent} from './page/footerpage/footerpage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomertableComponent} from './customertable/customertable.component';
import {RecentActivityComponent} from './customertable/recent-activity/recent-activity.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {DeliveryagentDashboardComponent} from './deliveryagent-dashboard/deliveryagent-dashboard.component';
import {CustomerserviceDashboardComponent} from './customerservice-dashboard/customerservice-dashboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MapComponent} from './map/map.component';
import {MessagingComponent} from './messaging/messaging.component';
import {InvoicePrintComponent} from './invoice-print/invoice-print.component';
import {AdduserComponent} from './adduser/adduser.component';
import {CartComponent} from './cart/cart.component';
import {ReservationComponent} from './reservation/reservation.component';
import {OrderComponent} from './order/order.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardcustComponent,
    DashboardAdminComponent,
    UpdatecustprofileComponent,

    ProfileComponent,
    PageComponent,
    InvoiceComponent,
    AboutComponent,
    ProjectsComponent,
    ActivityComponent,
    FooterpageComponent,
    CustomertableComponent,
    RecentActivityComponent,
    AddproductComponent,
    EditproductComponent,
    DeliveryagentDashboardComponent,
    CustomerserviceDashboardComponent,
    HomepageComponent,
    MapComponent,
    MessagingComponent,
    InvoicePrintComponent,
    AdduserComponent,
    CartComponent,
    ReservationComponent,
    OrderComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
