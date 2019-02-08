import { Component, OnInit } from '@angular/core';
import { FetchLastService } from '../fetch-last.service';
import { Router , ActivatedRoute,ParamMap} from '@angular/router';
import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
 selector: 'app-details',
 templateUrl: './details.component.html',
 styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 constructor( private fetchLastService:FetchLastService, private http: HttpClient, private route: ActivatedRoute,private router :Router){}

 musicDetails:any;

 ngOnInit() {
   let id=this.route.snapshot.paramMap.get('name');
   console.log(name);
   this.musicDetails.getDetails(name).subscribe((data: any)=>{

     this.musicDetails=data.results.trackmatches.track;
     console.log(this.musicDetails)
   })


   }
  // this.music.getDetails("{{mu.image[3]['#text']}}").subscribe((x) => {
   //  this.Details= x
   //console.log(this.Details)
   //});
// }
 //displayimg() {
 //  this.music.displayImage1().subscribe((x) => {
    // this.Details = x
    // console.log(this.Details)
   //});

// }

}