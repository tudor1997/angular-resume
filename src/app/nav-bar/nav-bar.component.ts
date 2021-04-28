import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

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
  }
}
