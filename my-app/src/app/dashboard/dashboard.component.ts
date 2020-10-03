import { Component, OnInit, Inject, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { RestapiService, Task, Column } from '../restapi.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private restapi : RestapiService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  users: Task[] = [];
  columns: Column[] = [];
  animal: string; 
  name: string;
  temp : number = 0;
  dataIn : number = 0;
  timeLeft: number = 60;
  interval;
  cierto: boolean = false;
  time: number = 0;
  play : boolean = false;
  dialogRef



  ngOnInit(): void { 

    this.users = this.restapi.tasks; 

    this.columns = this.restapi.columns;

    // this.restapi.getMaster()
    // .subscribe(data => data.map(dat=>{
    //   console.log(dat.columns)
    //   this.columns = dat.columns
    // }));

    if(!this.restapi.isAuthenticated){
      this.openDialogLogin()
    }    

    if(this.restapi.isAuthenticated){
      this.openDialog()
    }    

    
  }
  
  ngAfterViewChecked(){
    
    if(this.restapi.isStarted){
      
      this.startTimer();
      this.timeLeft = 60;
      this.restapi.isStarted = false;
    }

    if(this.restapi.muestrameTablero){



      this.restapi.updateColumns(this.restapi.actualId-1,this.columns)
      .subscribe(
          (data : any) => {
            // this.historial = data   
            data.map((dat:any)=>{
              console.log(dat);
          // this.restapi.columns = dat.columns
        })
  
      })    
  

      this.restapi.muestrameTablero = false;
      


    }

    if(this.restapi.historyActive){

      console.log('active history from restapi');
  
      this.dialogRef.close('Pizza!');

      

      this.restapi.historyActive = false;



    }

    this.cdr.detectChanges();

  }

  startTimer() {
    this.play = true;
    this.interval = setInterval(() => {
      this.time++;
      if(this.time==60){
          this.restapi.message = "Timeout";
          this.openDialog();
          this.pauseTimer();
      }
    },1000)
  }
  
  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 2000);
  }


  checkAdjacent(columnId, rowId){

    // //horizontal by row
    for(let x=0;x<6;x++){

      for(let y=0;y<9;y++){
        
        if(this.columns[y].rows[x].color=="red"&&this.columns[y+1].rows[x].color=="red"&&this.columns[y+2].rows[x].color=="red"&&this.columns[y+3].rows[x].color=="red"){

          this.restapi.message = "Won Red";          
          this.openDialog();
        }

      }

    }


    // //vertical
    for(let x=0;x<12;x++){

      for(let y=0;y<4;y++){
        
        if(this.columns[x].rows[y].color=="red"&&this.columns[x].rows[y+1].color=="red"&&this.columns[x].rows[y+2].color=="red"&&this.columns[x].rows[y+3].color=="red"){

          this.restapi.message = "Won Red";
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

            this.restapi.message = "Won Red";
            this.openDialog();
          }
        }else if(y==1){          
          if(this.columns[x+1].rows[y].color=="red"&&this.columns[x+2].rows[y+1].color=="red"&&this.columns[x+3].rows[y+2].color=="red"&&this.columns[x+4].rows[y+3].color=="red"){

            this.restapi.message = "Won Red";
            this.openDialog();
          }
        }else if(y==2){          
          if(this.columns[x+2].rows[y].color=="red"&&this.columns[x+3].rows[y+1].color=="red"&&this.columns[x+4].rows[y+2].color=="red"&&this.columns[x+5].rows[y+3].color=="red"){

            this.restapi.message = "Won Red";
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

            this.restapi.message = "Won Red";           
            this.openDialog();
          }
        }else if(y==4){

          if(this.columns[x-1*-1].rows[y].color=="red"&&this.columns[x-2*-1].rows[y-1].color=="red"&&this.columns[x-3*-1].rows[y-2].color=="red"&&this.columns[x-4*-1].rows[y-3].color=="red"){

           this.restapi.message = "Won Red";
            this.openDialog();
          }
        }else if(y==3){

          if(this.columns[x-1*-2].rows[y].color=="red"&&this.columns[x-1*-2+1].rows[y-1].color=="red"&&this.columns[x+3*-1+1].rows[y-2].color=="red"&&this.columns[x+4*-1+1].rows[y-3].color=="red"){
           
            this.restapi.message = "Won Red";
            this.openDialog();
          }

        }
  
      }
    }


 
  }

  checkAdjacentThree(columnId, rowId) : any{

    // //horizontal by row
    for(let x=0;x<6;x++){

      for(let y=0;y<9;y++){
        
        if(this.columns[y].rows[x].color=="blue"&&this.columns[y+1].rows[x].color=="blue"){

          setTimeout(() => {
            
            this.columns[y+3].rows[x].color="red";
          }, 2000);
        }

      }

    }


    // //vertical
    for(let x=0;x<12;x++){

      for(let y=0;y<4;y++){
        
        if(this.columns[x].rows[y+1].color=="blue"&&this.columns[x].rows[y+2].color=="blue"){
          
          setTimeout(() => {
            
            this.columns[x].rows[y-1].color="red";
          }, 2000);
        }

      }
    }

    // //diagonal horizontal
    //me queda pendiente 0-2 y 0-1 | 7-0 y 8-0    
    for(let x=0;x<7;x++){
      for(let y=0;y<3;y++){
        if(y==0){          
          if(this.columns[x].rows[y].color=="blue"&&this.columns[x+1].rows[y+1].color=="blue"&&this.columns[x+2].rows[y+2].color=="blue"){

            this.restapi.message = "Hay solo tres";
            this.openDialog();
          }
        }else if(y==1){          
          if(this.columns[x+1].rows[y].color=="blue"&&this.columns[x+2].rows[y+1].color=="blue"&&this.columns[x+3].rows[y+2].color=="blue"){

            this.restapi.message = "Hay solo tres";
            this.openDialog();
          }
        }else if(y==2){          
          if(this.columns[x+2].rows[y].color=="blue"&&this.columns[x+3].rows[y+1].color=="blue"&&this.columns[x+4].rows[y+2].color=="blue"){

            this.restapi.message = "Hay solo tres";
            this.openDialog();
          }
        }
      }
    }

    // //diagonal vertical
    for(let x=0;x<1;x++){
      for(let y=5;y>=3;y--){

        if(y==5){

          if(this.columns[x].rows[y].color=="blue"&&this.columns[x+1].rows[y-1].color=="blue"&&this.columns[x+2].rows[y-2].color=="blue"){

            this.restapi.message = "Hay solo tres";           
            this.openDialog();
          }
        }else if(y==4){

          if(this.columns[x-1*-1].rows[y].color=="blue"&&this.columns[x-2*-1].rows[y-1].color=="blue"&&this.columns[x-3*-1].rows[y-2].color=="blue"){

           this.restapi.message = "Hay solo tres";
            this.openDialog();
          }
        }else if(y==3){

          if(this.columns[x-1*-2].rows[y].color=="blue"&&this.columns[x-1*-2+1].rows[y-1].color=="blue"&&this.columns[x+3*-1+1].rows[y-2].color=="blue"){
           
            this.restapi.message = "Hay solo tres";
            this.openDialog();
          }

        }
  
      }
    }


 
  }

  openDialog(): void {

    this.dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      data: {name: this.name, animal: this.animal}
    });

    this.dialogRef.disableClose = true;

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    
//getcounter    
    this.restapi.getCounter()
    .subscribe((data:any) => data.map(dat=>{
      // console.log(dat)
      this.dataIn = dat.quantity
      this.restapi.setMaster(this.columns,dat.quantity);

    }));
   
  

  }

  openDialogLogin(): void {

    const dialogRef = this.dialog.open(UserComponent, {
      width: '450px',
      data: {name: this.name, animal: this.animal,'test':'test'}
    });

    dialogRef.disableClose = true;


    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  

  }


  onClick(columnId,rowId){

    if(!this.restapi.isStarted){
      
      this.pauseTimer();
      this.time = 0;
      this.startTimer();
    }

    for(var x=0;x<2;x++){
        
        var movement = Math.floor( Math.random() * 12 )
        
        if(this.restapi.player){

            setTimeout(() => {
              
              this.checkLocation(movement,rowId);
              this.columns[movement].rows[rowId].color="red";
              this.restapi.player = !this.restapi.player;
            }, 1000);
          }else{
            

            // if(this.cierto){
              
            //   console.log('ya si');
            // }else{
              // console.log('aun no');
              this.checkLocation(columnId,rowId);
              this.checkAdjacentThree(columnId,rowId);
              this.columns[columnId].rows[rowId].color="blue";
              this.restapi.player = !this.restapi.player;    
            // }

          // console.log(this.checkAdjacentThree(columnId,rowId).cierto);
          // if(!this.checkAdjacentThree(columnId,rowId).cierto){

          //   this.checkLocation(columnId,rowId);
          //   this.columns[columnId].rows[rowId].color="blue";
          //   this.restapi.player = !this.restapi.player;
          // }else{//le da prioridad al red
            
          //   var posX = this.checkAdjacentThree(columnId,rowId).posX;            
          //   var posY = this.checkAdjacentThree(columnId,rowId).posY;            
          //   this.checkLocation(posX,posY+1);
          //   this.columns[columnId].rows[rowId].color="red";
          //   this.restapi.player = !this.restapi.player;
          // }


        }
    }//endfor

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
