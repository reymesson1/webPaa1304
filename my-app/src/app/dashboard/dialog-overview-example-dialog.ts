import { Component, OnInit, Inject } from '@angular/core';
import { RestapiService, Task } from '../restapi.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

    isScore : boolean = false;

    constructor(private restapi : RestapiService,public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    viewScore(){

        this.isScore = !this.isScore;
    }

    reset(){

        for(var x=0;x<this.restapi.tasks.length;x++){
            
            this.restapi.tasks[x].color="gray";
        }

        this.restapi.player = false;
        
        this.dialogRef.close();


    }

}

export interface DialogData {
    animal: string;
    name: string;
}  