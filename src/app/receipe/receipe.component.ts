import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  recetteInformation:any;

  constructor(private route:ActivatedRoute, private http:HttpClient, private apiService:ApiServiceService) { }

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    this.recetteInformation ="";
    this.detailsRc(id);
  }

  detailsRc(id:any){
      this.apiService.onSearchReceipe(id).subscribe(response => {
      this.recetteInformation = response;
      console.log(this.recetteInformation);
      
    });
     
  }
}
