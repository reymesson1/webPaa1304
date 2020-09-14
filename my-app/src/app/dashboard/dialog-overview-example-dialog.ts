import { Component, OnInit, Inject } from '@angular/core';
import { RestapiService, Task } from '../restapi.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {


    constructor(private restapi : RestapiService,public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    reset(){

        for(var x=0;x<this.restapi.tasks.length;x++){
            
            this.restapi.tasks[x].color="gray";
        }

        this.dialogRef.close();

    }

}

export interface DialogData {
    animal: string;
    name: string;
}  