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
subscription: Subscription;
technologies:any[];

  constructor(private database:DatabaseService) {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.database.getPortfolio().subscribe(portfolio => {
      this.portfolio$ = portfolio;
      portfolio.map(item => {
       this.technologies = item.technologies;
      })
    })
  }
}
