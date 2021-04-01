import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestHelper } from '../shared/request.helper';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  params!: any;
  userId: any;
  name: string;
  issueTitle: string;
  description: string;
  state: string;
  label: any[] = [];
  body!: string;

  constructor(
    private routes: ActivatedRoute,
    private requesthelper: RequestHelper
  ) { }

  ngOnInit(): void {
    this.getParamMap()
    this.requesthelper.get(`https://api.github.com/repos/angular/angular/issues/${this.userId}`,null).subscribe(
      res => {
        console.log(res)
        this.name = res.user.login
        this.issueTitle = res.title
        this.description = res.milestone.description
        this.state = res.state
        this.label = res.labels
        this.body = res.body
      }
    )
  }

  getParamMap() {
    this.routes.paramMap
    .subscribe( (response) => {
      this.params = response;
      this.userId = this.params.get('id')
    })
  }

}
