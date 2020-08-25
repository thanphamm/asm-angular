import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit(): void {
  }

  login() : void {
    if(this.username == 'vinhthanh' && this.password == '123'){
     this.router.navigate(["main"]);
    }else {
      alert("Đăng nhập thất bại");
    }
  }

}
