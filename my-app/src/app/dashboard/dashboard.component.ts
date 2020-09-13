import { Component, OnInit } from '@angular/core';
import { RestapiService, Task } from '../restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private restapi : RestapiService) { }


  users: Task[] = [];
  player: boolean = false;//blue


  ngOnInit(): void { 

    this.users = this.restapi.tasks; 

  }

  onClick(id){

    this.checkLocation(id);

    if(this.player){

      this.users[(id)-1].color="red";
      this.player = !this.player;
    }else{
      
      this.users[(id)-1].color="blue";
      this.player = !this.player;
    }

  }

  checkLocation(id){
    var color = "blue";
    if(this.player){
      color = "red"
    }
    var num = parseInt(id);
    var downCount = 0;
    for(var x=0,y=parseInt(id);x<=5;x++,y+=12){
      if(this.users[ (y) -1].color=="gray"){
        downCount = parseInt(y/12);
        console.log(downCount)
      }
    }
    if(id==12){
      downCount--;
    }
    for(var x=0,y=500;x<downCount;x++,y+=500){
      setTimeout(() => {
        this.users[ ( num ) -1].color="gray"; num +=12;
        this.users[ ( num ) -1].color=color;
      }, y);
    }
    //esta ocupado {red o blue} // no des el ultimo paso
    //si hago click en la segunda linea de arriba abajo son menos pasos.

    //el debe calcula cuantos paso debe dar hacia abajo, antes de iniciar el recorrido.
    
    //chequear si hay algo abajo.

    //quien esta gray?

  }



}
