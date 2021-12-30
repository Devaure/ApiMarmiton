import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 @Output() searchEventEmitter: EventEmitter<any> = new EventEmitter();

  pageRecettes:any;
  constructor(private http:HttpClient, private router:Router) { 
  }

  ngOnInit(): void {
  }

  onSearch(dataForm:any){
    
    this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${dataForm.keyWord}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "185b30adefmsh5370c1fe38b7058p19a5a6jsn6778c64e8009"
      }
    }).subscribe(response => {
     this.pageRecettes = response;
    });
  }
  
  onValue(data:any){
     this.searchEventEmitter.emit(data);
      this.router.navigateByUrl(`/receipe/${data.name}`);
  }
}
