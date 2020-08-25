import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  subjects:any;
  slmon=4;
  tranght=1;

  key: string = 'Name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(`./assets/db/Subjects.js`).subscribe(data => {
      this.subjects=data;
    });
  }
}
