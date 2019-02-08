import { Component, OnInit } from '@angular/core';
import { FetchLastService} from '../fetch-last.service'
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private topmusic:FetchLastService) { }

musichere;
  ngOnInit() {
    // this.topmusic.getSongs().subscribe((data :any)=>
    // {
    //   console.log(data)
    //   this.musichere=data.track;
    // })
  }

}
