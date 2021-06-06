import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
skills: any;
portfolio:any;
  constructor(public db:AngularFireDatabase) { }

  getSkills() {
    this.skills = this.db.list('/skills').valueChanges();
    return this.skills;
  }
  getPortfolio() {
    this.portfolio = this.db.list('/porfolio').valueChanges();
    return this.portfolio;
  }
}
