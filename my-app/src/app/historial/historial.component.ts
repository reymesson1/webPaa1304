import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {


  historial: any[] = [];

  constructor(public restapi : RestapiService) { }

  ngOnInit(): void { 

    this.restapi.getHistorial()
    .subscribe(data => {
      console.log(data);
      this.historial = data    
    })    
 
  }



}
