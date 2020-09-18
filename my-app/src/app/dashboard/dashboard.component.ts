import { Component, OnInit, Inject } from '@angular/core';
import { RestapiService, Task } from '../restapi.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private restapi : RestapiService, public dialog: MatDialog) { }

  users: Task[] = [];
  usersMulti: Task[][] = [12][6];
  animal: string;
  name: string;

  ngOnInit(): void { 

    this.users = this.restapi.tasks; 


  }

  checkAdjacent(){

    for(var x=0;x<72;x++){


        console.log(x + " " + parseInt(x+1) + " " +  parseInt(x+2) + " " + parseInt(x+3));
        if(this.users[parseInt(x)].color =="red" && this.users[parseInt(x+1)].color == "red" &&  this.users[parseInt(x+2)].color == "red" && this.users[parseInt(x+3)].color == "red"){

          this.openDialog();
        }


    }

    
      // if(this.users[4].color=="red"&&this.users[5].color=="red"&&this.users[6].color=="red"&&this.users[7].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[16].color=="red"&&this.users[17].color=="red"&&this.users[18].color=="red"&&this.users[19].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[28].color=="red"&&this.users[29].color=="red"&&this.users[30].color=="red"&&this.users[31].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[40].color=="red"&&this.users[41].color=="red"&&this.users[42].color=="red"&&this.users[43].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[52].color=="red"&&this.users[53].color=="red"&&this.users[54].color=="red"&&this.users[55].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[64].color=="red"&&this.users[65].color=="red"&&this.users[66].color=="red"&&this.users[67].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[0].color=="red"&&this.users[1].color=="red"&&this.users[2].color=="red"&&this.users[3].color=="red"){

      //   this.openDialog(); 
      // } else if(this.users[1].color=="red"&&this.users[2].color=="red"&&this.users[3].color=="red"&&this.users[4].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[2].color=="red"&&this.users[3].color=="red"&&this.users[4].color=="red"&&this.users[5].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[3].color=="red"&&this.users[4].color=="red"&&this.users[5].color=="red"&&this.users[6].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[5].color=="red"&&this.users[6].color=="red"&&this.users[7].color=="red"&&this.users[8].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[6].color=="red"&&this.users[7].color=="red"&&this.users[8].color=="red"&&this.users[9].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[7].color=="red"&&this.users[8].color=="red"&&this.users[9].color=="red"&&this.users[10].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[8].color=="red"&&this.users[9].color=="red"&&this.users[10].color=="red"&&this.users[11].color=="red"){
        
      //   this.openDialog(); 
      // }
      
      // //segunda linea


      // else if(this.users[12].color=="red"&&this.users[13].color=="red"&&this.users[14].color=="red"&&this.users[15].color=="red"){
        
      //   this.openDialog(); 
      // } else if(this.users[13].color=="red"&&this.users[14].color=="red"&&this.users[15].color=="red"&&this.users[16].color=="red"){
        
      //    this.openDialog();  
      // }


    
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  

  }

  // ngAfterViewChecked(){

  //   this.checkAdjacent();

  // }

  onClick(id){

    this.checkLocation(id);

    if(this.restapi.player){

      this.users[(id)-1].color="red";
      this.restapi.player = !this.restapi.player;
    }else{
      
      this.users[(id)-1].color="blue";
      this.restapi.player = !this.restapi.player;
    }

  }

  checkLocation(id){
    var color = "blue";
    if(this.restapi.player){
      color = "red"
    }
    var num = parseInt(id);
    var downCount = 0;
    for(var x=0,y=parseInt(id);x<=5;x++,y+=12){
      if(this.users[ (y) -1].color=="gray"){
        downCount = parseInt(y/12); 
        // console.log(downCount)
      }
    }
    if(id==12){
      downCount--;
    }
    for(var x=0,y=500;x<downCount;x++,y+=500){
      setTimeout(() => {
        this.users[ ( num ) -1].color="gray"; num +=12;
        this.users[ ( num ) -1].color=color;
        this.checkAdjacent();
      }, y);
    }

    //esta ocupado {red o blue} // no des el ultimo paso
    //si hago click en la segunda linea de arriba abajo son menos pasos.

    //el debe calcula cuantos paso debe dar hacia abajo, antes de iniciar el recorrido.
    
    //chequear si hay algo abajo.

    //quien esta gray?

  }



}
