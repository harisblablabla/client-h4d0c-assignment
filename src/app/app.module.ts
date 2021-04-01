import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueHomepageComponent } from './issue-homepage/issue-homepage.component';
import { RequestHelper } from './shared/request.helper';
import { HttpClientModule } from '@angular/common/http';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IssueHomepageComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RequestHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
