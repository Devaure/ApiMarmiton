import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pageRecettes:any;
  constructor(private http:HttpClient, private router:Router) { 
  }

  ngOnInit(): void {
  }

  onSearch(dataForm:any){
    
    this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${dataForm.keyWord}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "f52b8100d9msh384ea83972f2e27p12cb33jsn9528d63c23ed"
      }
    }).subscribe(response => {
     this.pageRecettes = response;
    });
  }
  
  onValue(data:any){
      this.router.navigateByUrl(`/receipe/${data.name}`);
  }
}
