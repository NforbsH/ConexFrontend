import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { DashboardcustComponent } from './customer/dashboardcust/dashboardcust.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { UpdatecustprofileComponent } from './customer/dashboardcust/updatecustprofile/updatecustprofile.component';

import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './page/page.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AboutComponent } from './page/about/about.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ActivityComponent } from './page/activity/activity.component';
import { FooterpageComponent } from './page/footerpage/footerpage.component';
import { InnerpageComponent } from './page/innerpage/innerpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomertableComponent } from './customertable/customertable.component';
import { RecentActivityComponent } from './customertable/recent-activity/recent-activity.component';

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
    InnerpageComponent,
    CustomertableComponent,
    RecentActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
