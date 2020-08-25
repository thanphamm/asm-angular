import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from 'ngx-order-pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-xdtw',
  templateUrl: './xdtw.component.html',
  styleUrls: ['./xdtw.component.css']
})
export class XdtwComponent implements OnInit {

  public h= 1;
  public m= 0;
  public s= 0;

  subject:any;
  id:string;
  quiz:any[]; //lưu danh sách câu hỏi
  quizct:any;  //lưu câu hỏi hiện
  index=0; //số câu hỏi hiện tại
  // slcauhoi=5;
  // tranght=1;
  constructor(private http:HttpClient, private orderPipe: OrderPipe, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('idQuiz');

      //lấy tên môn
      this.getSubjects().subscribe(data=>{
        this.subject = data.filter(c => c.Id == this.id);
      });

      //get quiz by id subject
      this.getQuixBySubjectId(this.id).subscribe(data=>{
        this.quiz=data;
        this.quizct=this.quiz[this.index];
      });
    });

  }

  getSubjects(){
    return this.http.get<any[]>(`./assets/db/Subjects.js`);
  }

  getQuixBySubjectId(id){
    return this.http.get<any[]>(`./assets/db/Quizs/${id}.js`);
  }

  Truoc(){
    this.index++;
    this.quizct=this.quiz[this.index];
  }
  Sau(){
    this.index--;
     this.quizct=this.quiz[this.index];
     this.buttonNext = false;
  }


  buttonNext:boolean=true;
  ketqua = 0;
  luachon ='';
  mang=[];
  formluu:any;
  dapan:boolean=false;

  Next(){
    console.log(this.luachon)
    if (this.luachon == this.quizct.AnswerId) {
      this.ketqua++;
      this.dapan=true;
      console.log(this.dapan)
    }else{
      this.dapan=false;
      console.log(this.dapan)
    }

    
    
    this.formluu={
      cauhoi:this.quizct.Text,
      dapan:this.luachon,
      ketqua:this.dapan
    }
    this.mang.push(this.formluu);

    if (this.index >= 19) {
      this.index = 19;
      this.buttonNext= true;
    }else{
      this.index++;
      this.quizct=this.quiz[this.index];
    }

  }

}
