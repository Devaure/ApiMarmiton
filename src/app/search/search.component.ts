import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pageRecettes:any;
  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
  }

  onSearch(dataForm:any){
    this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${dataForm.keyWord}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "cbe0ce5543msh02f357e73f1d277p1ec0cbjsnff71e7b7277e"
      }
    }).subscribe(response => {
      console.log(response);
      this.pageRecettes = response;
    });
  }
}
