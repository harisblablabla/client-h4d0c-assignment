import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueHomepageComponent } from './issue-homepage/issue-homepage.component';

const data = [
  {path:"homepage", component:IssueHomepageComponent},
  {path:"details/:id", component: IssueDetailsComponent}
]

const routes: Routes = data;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
