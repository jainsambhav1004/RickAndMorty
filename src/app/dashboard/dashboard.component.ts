import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  contentJson = [];
  contentJsonConst = [];
  orderByType = 'asc';
  Male = true;
  Female = true;
  constructor(
    private dashboardService: DashboardServiceService,
    private http: HttpClient
  ) {
    this.loadData();
  }


  ngOnInit() {
  }

  loadData() {
    this.dashboardService.getData().subscribe(onSuccess => {
      this.contentJson = onSuccess['results'];
      this.contentJsonConst = onSuccess['results'];
    }),
      // tslint:disable-next-line:no-unused-expression
      onFail => {
        console.log(onFail);
      };
  }
  toggleEditable() {
    this.contentJson = this.contentJsonConst;
    if (this.Male === true && this.Female === true) {

    } else if (this.Male === true) {
      // tslint:disable-next-line:only-arrow-functions
      this.contentJson = this.contentJson.filter(function(item) {
        return item.gender === 'Male';
      });
    } else if (this.Female === true) {
      // tslint:disable-next-line:only-arrow-functions
      this.contentJson = this.contentJson.filter(function(item) {
        return item.gender === 'Female';
      });
    } else {
      this.contentJson = [];
    }
  }
}
