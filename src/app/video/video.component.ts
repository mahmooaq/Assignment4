import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { VideoListing } from '../models/VideoListing';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  //properties
  @Input() public id : string;
  @Input() public title : string;
  @Input() public thumbnail : string;
  @Input() public createdOn : string;
  @Input() public avatar : string;
  @Input() public author : string;
  @Input() public views : number;
  @Input() public showAddToPlaylist : boolean;
  
  public alreadyInPlaylist : boolean;

  constructor(private userDataServive:UserDataService) { 

  }

  ngOnInit(): void {
    this.alreadyInPlaylist=this.userDataServive.videoExists(this.toObject());
  }

  //gets called when the button for add to playlist is pressed
  //if the add button is tapped and video is added the button is greyed out
  //and cannot be clicked
  addToPlaylist() : void {
    console.log("button pressed: add to playlist")
    if(this.userDataServive.addToPlaylist(this.toObject()))
      this.alreadyInPlaylist=true;
  }
  //converting the videolisting to object
  toObject() : VideoListing {
    return {
      "id" : this.id,
      "title" : this.title,
      "thumbnail_360_url" : this.thumbnail,
      "created_time" : this.createdOn,
      "owner.username" : this.author,
      "owner.avatar_80_url" : this.avatar,
      "views_total" : this.views
    }
  };
}
