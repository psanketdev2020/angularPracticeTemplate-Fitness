import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  topBtn:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window: scroll', ['$event'])
  onscroll(event){
    let topBtn = document.querySelector('.top')
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     this.topBtn = true;
    }else {
      this.topBtn = false;
    }
  }

  goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
