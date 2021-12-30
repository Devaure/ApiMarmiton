import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.homeReceipe();
  }

  homeReceipe() {
    this.tabReceipe.forEach(element => {
      this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=under_30_minutes&q=${element}`, {

        "headers": {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": "185b30adefmsh5370c1fe38b7058p19a5a6jsn6778c64e8009"
        }
      }).subscribe(response => {
        this.pageHome = response;
      });
    });

  }

}
