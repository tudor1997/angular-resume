import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Portfolio } from '../../models/portfolio.interface';
import { DatabaseService } from '../../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
portfolio$:Portfolio[] = [];
selectedItem:Portfolio;
subscription: Subscription;
@ViewChild('portfolio') portfolioEl: ElementRef;
@ViewChild('modal') modal: ElementRef;
@ViewChild('overlay') overlay: ElementRef;
  constructor(private database:DatabaseService) {
   this.subscription = this.database.getPortfolio().subscribe(portfolio => {
      this.portfolio$ = portfolio;

    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

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
