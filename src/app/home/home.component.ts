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
          "x-rapidapi-key": "cbe0ce5543msh02f357e73f1d277p1ec0cbjsnff71e7b7277e"
        }
      }).subscribe(response => {
        console.log(response);
        this.pageHome = response;
      });
    });

  }

}
