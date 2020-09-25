import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  users = []
  TOKEN_KEY = 'token'
  path = "http://localhost:8082/";
  
  authPath = this.path + '/login';


  player: boolean = false;//blue

  columnsTwo: Column[] = [];

  columns: Column[] = [
    new Column(0, [new Task(0,"name","gray"),
                    new Task(1,"name","gray"),
                    new Task(2,"name","gray"),
                    new Task(3,"name","gray"),
                    new Task(4,"name","gray"),
                    new Task(5,"name","gray")]),
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

  constructor(private http: HttpClient, private route: Router){}

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(){
      return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout(){
      localStorage.removeItem(this.TOKEN_KEY);
  }

  getUsers() {
      this.http.get<any>(this.path +'/users').subscribe(res =>{
          this.users = res
      })
  }

  getProfile(id) {
      return this.http.get(this.path +'/profile/' + id)
  }

  sendUserRegistration(loginData) { 

    this.http.post("http://localhost:8082/register",
    {
      "id": "1",
      "username": loginData.value.username,
      "password": loginData.value.password
    },{headers: new HttpHeaders({"Authorization":"Bearer " + localStorage.getItem("token") })})
    .subscribe(
        (val:any) => {
            console.log("POST call successful value returned in body",val);
            localStorage.setItem(this.TOKEN_KEY, val.token)
            if(this.isAuthenticated){
                location.reload();
            }else{
                console.log("Registration Failed")
            }   

         },
        response => {
          console.log("POST call in error", response.token);

        },
        () => {
          console.log("The POST observable is now completed.");
    }); 



    // this.http.post<any>(this.authPath + '/register', regData).subscribe(res =>{ 
    //     console.log(res) 
    //     localStorage.setItem(this.TOKEN_KEY, res.token)  
    //     if(this.isAuthenticated){
    //         this.route.navigateByUrl("/")
    //     }else{
    //         console.log("Registration Failed")
    //     }     
    // })
    
  }

  loginUser(loginData) {

    this.http.post("http://localhost:8082/login",
    {
      "id": "1",
      "username": loginData.value.username,
      "password": loginData.value.password
    },{headers: new HttpHeaders({"Authorization":"Bearer " + localStorage.getItem("token") })})
    .subscribe(
        (val:any) => {
            console.log("POST call successful value returned in body",val);
            localStorage.setItem(this.TOKEN_KEY, val.token)
            if(this.isAuthenticated){
                location.reload();
            }else{
                console.log("Registration Failed")
            }   

         },
        response => {
          console.log("POST call in error", response.token);

        },
        () => {
          console.log("The POST observable is now completed.");
    }); 

  };

  getMaster(){

    return this.http.get("http://localhost:8082/columns",
    {headers: new HttpHeaders({"Authorization":"Bearer " + localStorage.getItem("token") })})
    // .subscribe(
    //     (val) => {
    //         console.log("POST call successful value returned in body",val[0].columns);
    //         // this.columns = val[0];
    //         this.columnsTwo = val[0].columns
    //         // return val;
    //      },
    //     response => {
    //       console.log("POST call in error", response.token);
    //     },
    //     () => {
    //       console.log("The POST observable is now completed.");
    // });


  }

  setMaster(columns : Column[]){

    this.http.post("http://localhost:8082/column",
    {
      "id": "1",
      "date": moment().format("YYYY MM DD"),
      "columns": columns,
      "status": "loss",
      "creator": this.token
    },{headers: new HttpHeaders({"Authorization":"Bearer " + localStorage.getItem("token") })})
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body",val);
         },
        response => {
          console.log("POST call in error", response.token);
        },
        () => {
          console.log("The POST observable is now completed.");
    });
    

  }

  getRecapGame(){

    return this.http.get("http://localhost:8082/gamerecap",
    {headers: new HttpHeaders({"Authorization":"Bearer " + localStorage.getItem("token") })})

  }

  getHistorial(){

    return this.http.get("http://localhost:8082/historial",
    {headers: new HttpHeaders({"Authorization":"Bearer " + localStorage.getItem("token") })})

  }



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
