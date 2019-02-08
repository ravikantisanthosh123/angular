import { Component, OnInit } from '@angular/core';
import { FetchLastService} from '../fetch-last.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private fetchLastService:FetchLastService, private http:HttpClient) { }
  arrayOfMusic:any =[]
  ngOnInit() {
    this.fetchLastService.getSongs().subscribe(data=>
      {
        console.log(data);
        this.arrayOfMusic=data;
      })
  }
  onclick(music)
  {
    this.http.delete("http://localhost:3004/posts/"+music).subscribe(console.log)  
    this.arrayOfMusic=this.arrayOfMusic.filter(data=>music!=data.id)
  }

}
