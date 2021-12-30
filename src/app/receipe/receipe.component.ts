import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit  {
receipeInformation:any;
  constructor() { }

  ngOnInit(): void {
  }

  onActionEvent($event:any){
   this.receipeInformation = $event;

  }
}
