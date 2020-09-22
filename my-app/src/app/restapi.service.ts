import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  player: boolean = false;//blue

  columns: Column[] = [
    new Column(0, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","red"),
                    new Task(5,"name","red")]),
    new Column(1, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(2, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(3, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(4, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(5, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(6, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(7, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(8, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(9, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(10, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
    new Column(11, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
  ]

  tasks: Task[] = [  ];

  constructor() { }


}

export class Task {
  id: number;
  name: string;
  color: string = "gray";
  modified: string;

  constructor(id:number, name:string,  color:string){

    this.id = id;
    this.name = name;
    this.color = color;
  }


}

export class Column {
  id: number;
  rows: Task

  constructor(id:number, rows){

    this.id = id;
    this.rows = rows
  }


}
