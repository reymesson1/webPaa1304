import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import {NgForm} from '@angular/forms';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private restapi : RestapiService) { }

  login(event){

    this.restapi.loginUser(event);
  }

  openDialog(){


  }

  ngOnInit(): void {



  }

}
