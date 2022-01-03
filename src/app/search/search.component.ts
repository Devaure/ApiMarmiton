import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pageRecettes: any;
  searchResult: any;
  constructor(private http: HttpClient, private router: Router, private apiService: ApiServiceService) {
  }

  ngOnInit(): void {

  }

  onSearch(dataForm: any) {
    this.apiService.onSearch(dataForm.keyWord).subscribe((response: any) => {
      this.searchResult = response.results;
    });

  }

  onValue(data: any) {
    this.router.navigateByUrl(`/receipe/${data.name}`);
  }
}
