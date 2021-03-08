import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  data: any;

  population = 10000000;

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((json) => {
      this.data = json;
    });
  }
}
