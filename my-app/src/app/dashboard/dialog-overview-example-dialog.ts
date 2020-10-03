import { Component, OnInit, Inject } from '@angular/core';
import { RestapiService, Task } from '../restapi.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

    message : string;
    isScore : boolean = false;

    constructor(private restapi : RestapiService,public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {}

    ngOnInit(): void { 
    
        this.message = this.restapi.message;
    }
    

    onNoClick(): void {
        // this.dialogRef.close();
    }

    viewScore(){

        this.isScore = !this.isScore;
    }

    saveState(){

        console.log('saveState');
    }

    reset(){

        this.restapi.isStarted = true;

        for(var x=0;x<(<any>this.restapi.columns).length;x++){

            for(var y=0;y<(<any>this.restapi.columns[x].rows).length;y++){
                this.restapi.columns[x].rows[y].color = "gray";
            }
            
        }

        this.restapi.player = false;
        
        this.dialogRef.close();

    }

}

export interface DialogData {
    animal: string;
    name: string;
}  