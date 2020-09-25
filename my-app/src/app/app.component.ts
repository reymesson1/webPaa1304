import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  bool = false;
  
  
  
  play(){

    var audio = new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3");

    if(!this.bool){

      audio.play();
      this.bool = !this.bool;
      console.log("played");
    }else{
      audio.pause();
      this.bool = !this.bool;
      console.log("paused");
    }


  }

}
