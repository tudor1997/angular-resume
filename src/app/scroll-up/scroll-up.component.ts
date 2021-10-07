import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent implements OnInit {
@ViewChild('scrollBtn') scrollBtn!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  appear(){
    if(this.scrollBtn){
      if(window.scrollY >= 500){
        this.scrollBtn.nativeElement.classList.add('active');
      }else{
        this.scrollBtn.nativeElement.classList.remove('active');
      }
    }

  }
  scrollToTop() {
     window.scrollTo({
       top:0,
       behavior:'smooth'
     });
  }
}
