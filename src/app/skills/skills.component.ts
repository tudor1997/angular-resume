import { SKILL } from '../models/skills.interface';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from '../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills$: SKILL[] = [];
  selectedSkill: SKILL;
  subscription: Subscription;
  showSpinner:boolean = true;
  @ViewChild('percentage') percentage: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;

  constructor(public dbService: DatabaseService) {
    this.subscription = this.dbService.getSkills().subscribe((skills) => {
      this.skills$ = skills;
      this.showSpinner = false;
    });
  }

  ngOnInit(): void {}

  onSelect(skill: SKILL): void {
    this.selectedSkill = skill;
  }
  openModal() {
    if (this.percentage == null) return;
    this.percentage.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }
  closeModal() {
    if (this.percentage == null) return;
    this.percentage.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
