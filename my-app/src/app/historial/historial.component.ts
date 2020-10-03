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
    .subscribe(
        (data : any) => {
      console.log(data);
      this.historial = data    
    })    
 
  }

  loadHistory(id){

    this.restapi.setColumnCustom(id)
    .subscribe(
        (data : any) => {
          // this.historial = data   
          data.map((dat:any)=>{
            console.log(dat.columns);
        // this.restapi.columns = dat.columns
      })

    })    

    this.restapi.historyActive = true;


    console.log(id);

  }



}
