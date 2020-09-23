import { Component, OnInit, Inject } from '@angular/core';
import { RestapiService, Task, Column } from '../restapi.service';
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


    // for(var x=0;x<72;x++){

    //     if(this.users[parseInt(x)].color =="red" && this.users[parseInt(x+1)].color == "red" &&  this.users[parseInt(x+2)].color == "red" && this.users[parseInt(x+3)].color == "red"){

    //       this.openDialog();
    //     }

    // }

    // //vertical

    for(let x=0;x<12;x++){

      for(let y=0;y<3;y++){
        
        // console.log( x + " " + y + " " + parseInt(y+1) + " " + parseInt(y+2) + " " + parseInt(y+3)  );

        console.log(this.columns[x].rows[y].color=="red"&&this.columns[x].rows[y+1].color=="red"&&this.columns[x].rows[y+2].color=="red"&&this.columns[x].rows[y+3].color=="red");
        
        if(this.columns[x].rows[y].color=="red"&&this.columns[x].rows[y+1].color=="red"&&this.columns[x].rows[y+2].color=="red"&&this.columns[x].rows[y+3].color=="red"){

          this.openDialog();
        }

      }
    }

    // for(var x=parseInt(this.temp)-1,z=0;x<72;x+=12,z++){

    //   if(z<3){
            
    //     if(this.users[parseInt(x)].color=="red" && this.users[parseInt(x+12)].color=="red" && this.users[parseInt(x+24)].color=="red" && this.users[parseInt(x+36)].color=="red" ){

    //       this.openDialog();          
    //     }
    //   }

    // }

    // //diagonal horizontal
    // // for(var x=parseInt(this.temp),z=0;x<72;x+=13,z++){

    // //   if(z<3){
        
    // //     console.log(parseInt(x) + " " + parseInt(x+13) + " " + parseInt(x+26) +  " " + parseInt(x+39) )
    // //     if(this.users[parseInt(x)].color=="red" && this.users[parseInt(x+13)].color=="red" && this.users[parseInt(x+26)].color=="red" && this.users[parseInt(x+39)].color=="red" ){

    // //       this.openDialog();          
    // //     }
    // //   }

    // // }

    // //diagonal vertical
    // for(var x=parseInt(this.temp)-1,z=0;x<72;x+=11,z++){

    //   if(parseInt(this.temp)==4){

    //     if(z==0){
          
    //       console.log( parseInt(x) + " " + parseInt(x+11) + " " + parseInt(x+22) + " " + parseInt(x+33) );    
    //       if( this.users[parseInt(x)].color=="red" && this.users[parseInt(x+11)].color=="red" &&  this.users[parseInt(x+22)].color=="red" && this.users[parseInt(x+33)].color=="red" ){

    //         this.openDialog()
    //       }    
    //     }
    //   }
    //   if(parseInt(this.temp)==5){

    //     if(z<2){

    //       console.log( parseInt(x) + " " + parseInt(x+11) + " " + parseInt(x+22) + " " + parseInt(x+33) );    
    //       if( this.users[parseInt(x)].color=="red" && this.users[parseInt(x+11)].color=="red" &&  this.users[parseInt(x+22)].color=="red" && this.users[parseInt(x+33)].color=="red" ){

    //         this.openDialog()
    //       }    
    //     }
    //   }
    //   if(parseInt(this.temp)>=6){

    //     if(z<3){

    //       console.log( parseInt(x) + " " + parseInt(x+11) + " " + parseInt(x+22) + " " + parseInt(x+33) );    
    //       if( this.users[parseInt(x)].color=="red" && this.users[parseInt(x+11)].color=="red" &&  this.users[parseInt(x+22)].color=="red" && this.users[parseInt(x+33)].color=="red" ){

    //         this.openDialog()
    //       }    
    //     }
    //   }


    // }

    //   if(this.users[parseInt(60)].color=="red" && this.users[parseInt(49)].color=="red" && this.users[parseInt(38)].color=="red" && this.users[parseInt(27)].color=="red" ){

    //     this.openDialog();          
    //   }else if(this.users[parseInt(48)].color=="red" && this.users[parseInt(37)].color=="red" && this.users[parseInt(26)].color=="red" && this.users[parseInt(15)].color=="red" ){
      
    //     this.openDialog();         
    //   }else if(this.users[parseInt(36)].color=="red" && this.users[parseInt(25)].color=="red" && this.users[parseInt(14)].color=="red" && this.users[parseInt(3)].color=="red" ){
      
    //     this.openDialog();         
    //   }
 
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
