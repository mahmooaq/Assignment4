import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {VideoListing} from '../models/VideoListing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  //properties
  @Input() public showAddToPlaylist : boolean;
  @Input() public dataList : Array<VideoListing>;

  constructor() { }

  ngOnInit(): void {
  }

}