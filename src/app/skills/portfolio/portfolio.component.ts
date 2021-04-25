import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PORTFOLIO } from './portfolio';
import { Portfolio } from './portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
portfolio:Portfolio[];
selectedItem:Portfolio;
@ViewChild('portfolio') portfolioEl: ElementRef;
@ViewChild('modal') modal: ElementRef;
@ViewChild('overlay') overlay: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.portfolio = PORTFOLIO;
  }
onSelect(item: Portfolio): void {
  this.selectedItem = item;

}
  openModal(){
    if(this.modal == null) return
    this.modal.nativeElement.classList.add('active');

  }

  closeModal(){
    if(this.modal == null) return
    this.modal.nativeElement.classList.remove('active');

  }
}
