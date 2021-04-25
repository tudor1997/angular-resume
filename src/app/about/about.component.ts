import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutImage:string = "assets/images/about.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
