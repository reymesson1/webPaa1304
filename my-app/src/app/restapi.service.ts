import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  player: boolean = false;//blue

  columns: Column[] = [
    new Column("0", [new Task("0","name","gray"),
                    new Task("1","name","gray"),
                    new Task("2","name","gray"),
                    new Task("3","name","gray"),
                    new Task("4","name","gray"),
                    new Task("5","name","gray")]),
    new Column("1", [new Task("6","name","gray"),
                    new Task("7","name","gray"),
                    new Task("8","name","gray"),
                    new Task("9","name","gray"),
                    new Task("10","name","gray"),
                    new Task("11","name","gray")]),
    new Column("2", [new Task("12","name","gray"),
                    new Task("13","name","gray"),
                    new Task("14","name","gray"),
                    new Task("15","name","gray"),
                    new Task("16","name","gray"),
                    new Task("17","name","gray")]),
    new Column("3", [new Task("18","name","gray"),
                    new Task("19","name","gray"),
                    new Task("20","name","gray"),
                    new Task("21","name","gray"),
                    new Task("22","name","gray"),
                    new Task("23","name","gray")]),
    new Column("4", [new Task("24","name","gray"),
                    new Task("25","name","gray"),
                    new Task("26","name","gray"),
                    new Task("27","name","gray"),
                    new Task("28","name","gray"),
                    new Task("29","name","gray")]),
    new Column("5", [new Task("30","name","gray"),
                    new Task("31","name","gray"),
                    new Task("32","name","gray"),
                    new Task("33","name","gray"),
                    new Task("34","name","gray"),
                    new Task("35","name","gray")]),
    new Column("6", [new Task("36","name","gray"),
                    new Task("37","name","gray"),
                    new Task("38","name","gray"),
                    new Task("39","name","gray"),
                    new Task("40","name","gray"),
                    new Task("41","name","gray")]),
    new Column("7", [new Task("42","name","gray"),
                    new Task("43","name","gray"),
                    new Task("44","name","gray"),
                    new Task("45","name","gray"),
                    new Task("46","name","gray"),
                    new Task("47","name","gray")]),
    new Column("8", [new Task("48","name","gray"),
                    new Task("49","name","gray"),
                    new Task("50","name","gray"),
                    new Task("51","name","gray"),
                    new Task("52","name","gray"),
                    new Task("53","name","gray")]),
    new Column("9", [new Task("54","name","gray"),
                    new Task("55","name","gray"),
                    new Task("56","name","gray"),
                    new Task("57","name","gray"),
                    new Task("58","name","gray"),
                    new Task("59","name","gray")]),
    new Column("10", [new Task("60","name","gray"),
                    new Task("61","name","gray"),
                    new Task("62","name","gray"),
                    new Task("63","name","gray"),
                    new Task("64","name","gray"),
                    new Task("65","name","gray")]),
    new Column("11", [new Task("66","name","gray"),
                    new Task("67","name","gray"),
                    new Task("68","name","gray"),
                    new Task("69","name","gray"),
                    new Task("70","name","gray"),
                    new Task("71","name","gray")]),
  ]

  tasks: Task[] = [

    new Task("1","Tarea 1","gray"),
    new Task("2","Tarea 1","gray"),
    new Task("3","Tarea 1","gray"),
    new Task("4","Tarea 1","gray"),
    new Task("5","Tarea 1","gray"),
    new Task("6","Tarea 1","gray"),
    new Task("7","Tarea 1","gray"),
    new Task("8","Tarea 1","gray"),
    new Task("9","Tarea 1","gray"),
    new Task("10","Tarea 1","gray"),
    new Task("11","Tarea 1","gray"),
    new Task("12","Tarea 1","gray"),
    new Task("13","Tarea 1","gray"),
    new Task("14","Tarea 1","gray"),
    new Task("15","Tarea 1","gray"),
    new Task("16","Tarea 1","gray"),
    new Task("17","Tarea 1","gray"),
    new Task("18","Tarea 1","gray"),
    new Task("19","Tarea 1","gray"),
    new Task("20","Tarea 1","gray"),
    new Task("21","Tarea 1","gray"),
    new Task("22","Tarea 1","gray"),
    new Task("23","Tarea 1","gray"),
    new Task("24","Tarea 1","gray"),
    new Task("25","Tarea 1","gray"),
    new Task("26","Tarea 1","gray"),
    new Task("27","Tarea 1","gray"),
    new Task("28","Tarea 1","gray"),
    new Task("29","Tarea 1","gray"),
    new Task("30","Tarea 1","gray"),
    new Task("31","Tarea 1","gray"),
    new Task("32","Tarea 1","gray"),
    new Task("33","Tarea 1","gray"),
    new Task("34","Tarea 1","gray"),
    new Task("35","Tarea 1","gray"),
    new Task("36","Tarea 1","gray"),
    new Task("37","Tarea 1","gray"),
    new Task("38","Tarea 1","gray"),
    new Task("39","Tarea 1","gray"),
    new Task("40","Tarea 1","gray"),
    new Task("41","Tarea 1","gray"),
    new Task("42","Tarea 1","gray"),
    new Task("43","Tarea 1","gray"),
    new Task("44","Tarea 1","gray"),
    new Task("45","Tarea 1","gray"),
    new Task("46","Tarea 1","gray"),
    new Task("47","Tarea 1","gray"),
    new Task("48","Tarea 1","gray"),
    new Task("49","Tarea 1","gray"),
    new Task("50","Tarea 1","gray"),
    new Task("51","Tarea 1","gray"),
    new Task("52","Tarea 1","gray"),
    new Task("53","Tarea 1","gray"),
    new Task("54","Tarea 1","gray"),
    new Task("55","Tarea 1","gray"),
    new Task("56","Tarea 1","gray"),
    new Task("57","Tarea 1","gray"),
    new Task("58","Tarea 1","gray"),
    new Task("59","Tarea 1","gray"),
    new Task("60","Tarea 1","gray"),
    new Task("61","Tarea 1","gray"),
    new Task("62","Tarea 1","gray"),
    new Task("63","Tarea 1","gray"),
    new Task("64","Tarea 1","gray"),
    new Task("65","Tarea 1","gray"),
    new Task("66","Tarea 1","gray"),
    new Task("67","Tarea 1","gray"),
    new Task("68","Tarea 1","gray"),
    new Task("69","Tarea 1","gray"),
    new Task("70","Tarea 1","gray"),
    new Task("71","Tarea 1","gray"),
    new Task("72","Tarea 1","gray"),
        

  ];

  constructor() { }


}

export class Task {
  id: string;
  name: string;
  color: string = "gray";
  modified: string;

  constructor(id:string, name:string,  color:string){

    this.id = id;
    this.name = name;
    this.color = color;
  }


}

export class Column {
  id: string;
  rows: Task

  constructor(id:string, rows){

    this.id = id;
    this.rows = rows
  }


}
