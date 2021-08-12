import { Component, OnInit } from '@angular/core';
import { DailyMotionService } from '../daily-motion.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

export class HomeScreenComponent implements OnInit {

  //properties
  private keywords: string;
  public searchResults : any;

  
  constructor(private dailyMotionService:DailyMotionService) { 
    this.keywords="";
    this.searchResults=[];
  }

  ngOnInit(): void { }

  //method to update the keywords (event handler)
  updateKeywords(event: Event): void {
    this.keywords=(<HTMLInputElement>event.target).value;
  }

  //event handler for getting videos, the page updates with
  //matching videos from Dailymotion.com
  getVideos(event: Event): void {
    let apiReq=this.dailyMotionService.fetch(this.keywords);
    let results : SearchResults;

    apiReq.subscribe((data:SearchResults)=>{
      this.searchResults=data.body.list;
      console.log(data.body.list)
    });
  }

}
//interface for search result which has a list as an array
interface SearchResults {
  body: {
    list: Array<Object>
  }
}