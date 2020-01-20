import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private router: Router, private http: HttpClient) { }

  getData() {
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }
}
