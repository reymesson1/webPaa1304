import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  player: boolean = false;//blue

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
