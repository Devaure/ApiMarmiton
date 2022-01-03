import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  pageHome: any;

 
  constructor(private http: HttpClient, private router:Router, private serviceApi:ApiServiceService) {
    
   }

  ngOnInit(): void {
    this.pageHome = this.serviceApi.homeReceipe();
    console.log(this.pageHome);
  }

  onValueHome(data:any){
    console.log(data.name);
    this.router.navigateByUrl(`/receipe/${data.name}`);
}
}
