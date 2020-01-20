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
  orderByType = 'asc';
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
    }),
      // tslint:disable-next-line:no-unused-expression
      onFail => {
        console.log(onFail);
      };
  }
}
