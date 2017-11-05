import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greetings = '';
  itemsjson : string;
  inputLarge : string;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.findJSON().subscribe(result => { 
        this.itemsjson = result; 
    }, 
        err => { console.log(err);}   
    );
  }

  submitData(textdata:string): void {
    this._appService.sendText(textdata).subscribe(data => console.log(data));
    console.log("sent text");
    this.ngOnInit(); 
    console.log("refreshed");
  }

}

