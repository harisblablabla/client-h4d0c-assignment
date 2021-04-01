import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestHelper } from '../shared/request.helper';

@Component({
  selector: 'app-issue-homepage',
  templateUrl: './issue-homepage.component.html',
  styleUrls: ['./issue-homepage.component.css']
})
export class IssueHomepageComponent implements OnInit {

  name!: string;
  arrData: any[] = [];
  page: number = 1;
  number!: number;
  searchData: string = 'repo:angular/angular/node+type:issue+state:open'
  notnull: boolean = false;
  totalCount!: number

  constructor(
    private requestHelper: RequestHelper,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.requestHelper.get('https://api.github.com/repos/angular/angular',null).subscribe(
      (res: any) => {
        this.name = res.full_name
      },(err: any) => console.log(err)
    )
    this.callData()
  }

  callData() {
    const param = {
      q: this.searchData,
      per_page: 10,
      page: this.page
    }

    this.requestHelper.get(`https://api.github.com/search/issues`,param).subscribe(
      (res: any) => {
        this.totalCount = res.total_count
        this.arrData = res.items
        this.number = res.number
        if(this.arrData.length != 0) {
          this.notnull = true
        }
        else {
          this.notnull = false
        }
      },
      (err: any) => {
        this.notnull = false
      }
    )
  }

  addPage() {
    this.page = this.page + 1
    this.callData()
  }

  backPage() {
    if(this.page > 1) {
      this.page = this.page - 1
      this.callData()
    }
  }

  navigateDetails(number: number) {
    this.route.navigate([`details/${number}`])
  }

  setPage(page: number) {
    this.page = page
    this.callData()
  }

  search() {
    this.callData()
  }


}
