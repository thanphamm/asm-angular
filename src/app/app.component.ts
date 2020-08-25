import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asm';

  subjects:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(`../assets/db/Subjects.js`).subscribe(data => {
      this.subjects=data;
    });
  }
  
  

  
}
