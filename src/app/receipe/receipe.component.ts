import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  recetteInformation:any;
  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    this.onSearch(id);
  }

  onSearch(id:any){
    
    this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${id}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "185b30adefmsh5370c1fe38b7058p19a5a6jsn6778c64e8009"
      }
    }).subscribe(response => {
     this.recetteInformation = response;
    });
  }

}
