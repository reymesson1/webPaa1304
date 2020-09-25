import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  bool = false;
  audio = new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3");
  
  
  
  play(){


    if(!this.bool){

      this.audio.play();
      this.bool = !this.bool;
      console.log("played");
    }else{
      this.audio.pause();
      this.bool = !this.bool;
      console.log("paused");
    }


  }

}
