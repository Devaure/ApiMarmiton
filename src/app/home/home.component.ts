import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  pageHome: any;
  tabReceipe: string[] = [
    "chicken",
    "salade",
    "apple pie",
    "cake"
  ];
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.homeReceipe();
  }

  homeReceipe() {
    this.tabReceipe.forEach(element => {
      this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=under_30_minutes&q=${element}`, {

        "headers": {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": "f52b8100d9msh384ea83972f2e27p12cb33jsn9528d63c23ed"
        }
      }).subscribe(response => {
        this.pageHome = response;
      });
    });

  }

  onValueHome(data:any){
    this.router.navigateByUrl(`/receipe/${data.name}`);
}
}
