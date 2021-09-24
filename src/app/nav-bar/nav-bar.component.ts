import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('navigation') navigation: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  openNavbar(){
    this.navigation.nativeElement.style.display = "flex";
    this.navigation.nativeElement.style.top = "0";

  }
  closeNavbar(){
    this.navigation.nativeElement.style.top = "-130%";
    if(window.scrollY){
      window.scroll(0,0);
    }
  }
 @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
  this.container.nativeElement.style.position = "sticky";
  this.container.nativeElement.style.top = "0";
  this.container.nativeElement.style.left = "0";
  this.container.nativeElement.style.zIndex = "1";
 if(window.scrollY <= 0){
   this.container.nativeElement.style.position = "relative";
 }

 }
}
