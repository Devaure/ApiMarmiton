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
          "x-rapidapi-key": "b1158bc221msh32c40bad20c18b7p11d611jsn306b409375cc"
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
        "x-rapidapi-key": "b1158bc221msh32c40bad20c18b7p11d611jsn306b409375cc"
      }
    })
  }

  onSearchReceipe(id:any){

    return this.http.get(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes&q=${id}`,{
    
      "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "b1158bc221msh32c40bad20c18b7p11d611jsn306b409375cc"
      }
    });
  }
}
