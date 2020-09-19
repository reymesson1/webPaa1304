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
  temp : number = 0;

  ngOnInit(): void { 

    this.users = this.restapi.tasks; 


  }

  checkAdjacent(){

    //horizontal
    for(var x=0;x<72;x++){

        if(this.users[parseInt(x)].color =="red" && this.users[parseInt(x+1)].color == "red" &&  this.users[parseInt(x+2)].color == "red" && this.users[parseInt(x+3)].color == "red"){

          this.openDialog();
        }

    }

    //vertical
    for(var x=parseInt(this.temp)-1,z=0;x<72;x+=12,z++){

      if(z<3){
            
        if(this.users[parseInt(x)].color=="red" && this.users[parseInt(x+12)].color=="red" && this.users[parseInt(x+24)].color=="red" && this.users[parseInt(x+36)].color=="red" ){

          this.openDialog();          
        }
      }

    }

    //diagonal horizontal
    for(var x=parseInt(this.temp)-1,z=0;x<72;x+=13,z++){

      if(z<3){

        console.log( parseInt(x) + " " + parseInt(x+13) + " " + parseInt(x+26) + " " + parseInt(x+39) );        
        if(this.users[parseInt(x)].color=="red" && this.users[parseInt(x+13)].color=="red" && this.users[parseInt(x+26)].color=="red" && this.users[parseInt(x+39)].color=="red" ){

          this.openDialog();          
        }

      }
    }


    //diagonal vertical
    for(var x=parseInt(this.temp)-1,z=0;x<72;x+=11,z++){

      if(parseInt(this.temp)==4){

        if(z==0){
          
          // console.log( parseInt(x) + " " + parseInt(x+11) + " " + parseInt(x+22) + " " + parseInt(x+33) );    
          if( this.users[parseInt(x)].color=="red" && this.users[parseInt(x+11)].color=="red" &&  this.users[parseInt(x+22)].color=="red" && this.users[parseInt(x+33)].color=="red" ){

            this.openDialog()
          }    
        }
      }
      if(parseInt(this.temp)==5){

        if(z<2){

          // console.log( parseInt(x) + " " + parseInt(x+11) + " " + parseInt(x+22) + " " + parseInt(x+33) );    
          if( this.users[parseInt(x)].color=="red" && this.users[parseInt(x+11)].color=="red" &&  this.users[parseInt(x+22)].color=="red" && this.users[parseInt(x+33)].color=="red" ){

            this.openDialog()
          }    
        }
      }
      if(parseInt(this.temp)>=6){

        if(z<3){

          // console.log( parseInt(x) + " " + parseInt(x+11) + " " + parseInt(x+22) + " " + parseInt(x+33) );    
          if( this.users[parseInt(x)].color=="red" && this.users[parseInt(x+11)].color=="red" &&  this.users[parseInt(x+22)].color=="red" && this.users[parseInt(x+33)].color=="red" ){

            this.openDialog()
          }    
        }
      }


    }



      // if(this.users[parseInt(60)].color=="red" && this.users[parseInt(49)].color=="red" && this.users[parseInt(38)].color=="red" && this.users[parseInt(27)].color=="red" ){

      //   this.openDialog();          
      // }else if(this.users[parseInt(48)].color=="red" && this.users[parseInt(37)].color=="red" && this.users[parseInt(26)].color=="red" && this.users[parseInt(15)].color=="red" ){
      
      //   this.openDialog();         
      // }else if(this.users[parseInt(36)].color=="red" && this.users[parseInt(25)].color=="red" && this.users[parseInt(14)].color=="red" && this.users[parseInt(3)].color=="red" ){
      
      //   this.openDialog();         
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
    this.temp = id;

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
