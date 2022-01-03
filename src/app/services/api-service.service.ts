import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  tabReceipeTwo: any [] = [];
  dataValue:any;
  
  tabReceipe: string[] = [
    "chicken",
    "salade",
    "apple pie",
    "cake"
  ];
  constructor(private http: HttpClient) {
   }

  public homeReceipe() {
    this.tabReceipe.forEach(element => {
      this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=under_30_minutes&q=${element}`, {

        "headers": {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": "8b62751475msh7d3f03afa7ad76bp1ca87fjsn06dc0ba15a02"
        }
      }).subscribe(response => {
         this.tabReceipeTwo.push(response);
      });
    });
    return this.tabReceipeTwo;
  }

  onSearch(dataValue:any){
    
    return this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${dataValue}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "8b62751475msh7d3f03afa7ad76bp1ca87fjsn06dc0ba15a02"
      }
    })
  }

  onSearchReceipe(id:any){

    return this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${id}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "8b62751475msh7d3f03afa7ad76bp1ca87fjsn06dc0ba15a02"
      }
    });
  }
}
