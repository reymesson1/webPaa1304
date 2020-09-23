import { Component, OnInit, Inject } from '@angular/core';
import { RestapiService, Task, Column } from '../restapi.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private restapi : RestapiService, public dialog: MatDialog) { }

  users: Task[] = [];
  columns: Column[] = [];
  animal: string;
  name: string;
  temp : number = 0;

  ngOnInit(): void { 

    this.users = this.restapi.tasks; 

    this.columns = this.restapi.columns;

  }

  checkAdjacent(columnId, rowId){

    // //horizontal by row
    for(let x=0;x<6;x++){

      for(let y=0;y<9;y++){
        
        if(this.columns[y].rows[x].color=="red"&&this.columns[y+2].rows[x].color=="red"&&this.columns[y+3].rows[x].color=="red"){

          this.openDialog();
        }

      }

    }


    // //vertical
    for(let x=0;x<12;x++){

      for(let y=0;y<3;y++){
        
        if(this.columns[x].rows[y].color=="red"&&this.columns[x].rows[y+1].color=="red"&&this.columns[x].rows[y+2].color=="red"&&this.columns[x].rows[y+3].color=="red"){

          this.openDialog();
        }

      }
    }

    // //diagonal horizontal
    //me queda pendiente 0-2 y 0-1 | 7-0 y 8-0    
    for(let x=0;x<7;x++){
      for(let y=0;y<3;y++){
        if(y==0){          
          if(this.columns[x].rows[y].color=="red"&&this.columns[x+1].rows[y+1].color=="red"&&this.columns[x+2].rows[y+2].color=="red"&&this.columns[x+3].rows[y+3].color=="red"){
            this.openDialog();
          }
        }else if(y==1){          
          if(this.columns[x+1].rows[y].color=="red"&&this.columns[x+2].rows[y+1].color=="red"&&this.columns[x+3].rows[y+2].color=="red"&&this.columns[x+4].rows[y+3].color=="red"){
            this.openDialog();
          }
        }else if(y==2){          
          if(this.columns[x+2].rows[y].color=="red"&&this.columns[x+3].rows[y+1].color=="red"&&this.columns[x+4].rows[y+2].color=="red"&&this.columns[x+5].rows[y+3].color=="red"){
            this.openDialog();
          }
        }
      }
    }

    // //diagonal vertical
    for(let x=0;x<1;x++){
      for(let y=5;y>=3;y--){

        if(y==5){

          if(this.columns[x].rows[y].color=="red"&&this.columns[x+1].rows[y-1].color=="red"&&this.columns[x+2].rows[y-2].color=="red"&&this.columns[x+3].rows[y-3].color=="red"){
           
            this.openDialog();
          }
        }else if(y==4){

          if(this.columns[x-1*-1].rows[y].color=="red"&&this.columns[x-2*-1].rows[y-1].color=="red"&&this.columns[x-3*-1].rows[y-2].color=="red"&&this.columns[x-4*-1].rows[y-3].color=="red"){
           
            this.openDialog();
          }
        }else if(y==3){

          if(this.columns[x-1*-2].rows[y].color=="red"&&this.columns[x-1*-2+1].rows[y-1].color=="red"&&this.columns[x+3*-1+1].rows[y-2].color=="red"&&this.columns[x+4*-1+1].rows[y-3].color=="red"){
           
            this.openDialog();
          }

        }
  
      }
    }


 
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

  openDialogLogin(): void {

    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  

  }


  onClick(columnId,rowId){

    // console.log(columnId + " " + rowId)

    this.checkLocation(columnId,rowId);

    if(this.restapi.player){
      this.columns[columnId].rows[rowId].color="red";
      this.restapi.player = !this.restapi.player;
    }else{
      
      this.columns[columnId].rows[rowId].color="blue";
      this.restapi.player = !this.restapi.player;
    }

  }

  checkLocation(columnId,rowId){

    var color = "blue";
    if(this.restapi.player){
      color = "red"
    }


    //chequea en esa column cuando grayes hay.
    let downCount = 0;
    for(let x=0;x<6;x++){ 
      // console.log(this.columns[columnId].rows[x].color);
      if(this.columns[columnId].rows[x].color=="gray"){
        downCount++;
      }
    }

    for(let x=0,y=500;x<downCount-1;x++,y+=500){
      setTimeout(() => {

        this.columns[columnId].rows[x].color="gray";
        
      }, y);
      setTimeout(() => {
        
        this.columns[columnId].rows[x+1].color=color;
        this.checkAdjacent(columnId,rowId);

      }, y);
    }

  }



}
