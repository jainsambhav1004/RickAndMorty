import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardServiceService } from './dashboard/dashboard-service.service';
import { OrderByPipe } from './common/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  entryComponents: [],
  providers: [
    DashboardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
