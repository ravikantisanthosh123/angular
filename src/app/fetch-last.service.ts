import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchLastService {
 
  constructor(private http:HttpClient) { }
  getSongs()
  {
    return this.http.get("http://localhost:3004/posts")
  }

  searchMusic(nameOfthesong:any) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${nameOfthesong}&api_key=3b920f5e4bee2291feda876c0598107c&format=json`)
  }

  getDetails(value) {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&track="+{value}+"&format=json");
  }
  putDetails(image,title){
    console.log("Data is", title)
    return this.http.post("http://localhost:3004/details",{image,title}).subscribe(console.log)
  }
  displayImage1(){
    return this.http.get("http://localhost:3004/details");
  }
}
