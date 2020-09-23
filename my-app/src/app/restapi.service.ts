import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  users = []
  TOKEN_KEY = 'token'
  path = "http://localhost:8082/";
  
  authPath = this.path + '/auth';


  player: boolean = false;//blue

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

  sendUserRegistration(regData) {
    this.http.post<any>(this.authPath + '/register', regData).subscribe(res =>{ 
        console.log(res) 
        localStorage.setItem(this.TOKEN_KEY, res.token)  
        if(this.isAuthenticated){
            this.route.navigateByUrl("/")
        }else{
            console.log("Registration Failed")
        }     
    })
    
  }

  loginUser(loginData) {
      this.http.post<any>(this.authPath + '/login', loginData).subscribe(res =>{
          console.log(res);
          localStorage.setItem(this.TOKEN_KEY, res.token)
          if(this.isAuthenticated){
              this.route.navigateByUrl("/")
          }else{
              console.log("Registration Failed")
          }   
      })
  };

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
