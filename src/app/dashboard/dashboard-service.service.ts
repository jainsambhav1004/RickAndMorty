import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiConstant } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private router: Router, private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:4401/assets/data.json');
  }
}
