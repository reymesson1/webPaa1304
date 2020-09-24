import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private restapi : RestapiService) { }

  register(event){
    
    this.restapi.sendUserRegistration(event);
  }

  openDialog(){


  }

  ngOnInit(): void {



  }
}
