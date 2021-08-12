import { Injectable } from '@angular/core';
import {VideoListing} from './models/VideoListing';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private playlist : Array<VideoListing>;

  constructor() { 
    this.playlist=[];
  }
  //retrieves all the vidoes in the playlist
  getPlaylist() : Array<Object> {
    return this.playlist;
  }
  //Adds a video to user's playlist
  clearPlaylist() : void {
    this.playlist=[];
  }
  //logic to check if the video already exist in the playlist
  videoExists(video:VideoListing) : boolean {
    let videoExists=false;
    this.playlist.forEach((pvideo)=>{
      if(pvideo.id === video.id) {
        videoExists=true;
        return;
      }
    });

    return videoExists;
  }
  //Logic to add video to user's playlist
  //if the video does not exist it adds it to playlist else
  //it will return false
  addToPlaylist(video:VideoListing) : boolean {
    let videoExists=this.videoExists(video);
    if(!videoExists) {
      this.playlist.push(video);
      return true;
    }

    return false;
  }
}
