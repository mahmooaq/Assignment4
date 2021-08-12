import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {

  constructor(private http: HttpClient) { 

  }
  //method to retrieve video data from the dailymotion.com
  //API and retrieves a list of video matching the keyword
  public fetch(q: string) : any {
    const keywords=encodeURIComponent(q);
    let searchResults;

    return this.http.get(`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=${keywords}`, {
      observe:'response',
      responseType:'json'
    });
  }
}
