import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-my-playlist-screen',
  templateUrl: './my-playlist-screen.component.html',
  styleUrls: ['./my-playlist-screen.component.css']
})

export class MyPlaylistScreenComponent implements OnInit {

  //property
  public playlist : Array<any>;

  constructor(private userDataService:UserDataService) { 
    
  }

  ngOnInit(): void {
    this.playlist=this.userDataService.getPlaylist();
  }

  //method to clear the playlist when the playlist button is pressed
  //and automatically updates the component UO that there no
  //vidoes in the playlist
  clearPlaylist() : void {
    console.log("Button for clear playlist pressed")
    this.userDataService.clearPlaylist();
    this.playlist=[];
    console.log(this.playlist)
  }

}
