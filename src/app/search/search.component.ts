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
        "x-rapidapi-key": "f0851399c0mshb7356be765dcad0p17ee0ejsn062bb89a017b"
      }
    }).subscribe(response => {
      console.log(response);
      this.pageRecettes = response;
    });
  }
}
