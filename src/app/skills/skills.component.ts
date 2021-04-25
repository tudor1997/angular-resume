import { SKILL } from './skills.interface';
import { Component, ElementRef, Input, OnInit, ViewChild,  } from '@angular/core';
import { Skills } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skills:SKILL[] = Skills;
selectedSkill:SKILL;
@ViewChild('percentage') percentage: ElementRef;
@ViewChild('overlay') overlay: ElementRef;


  constructor() { }

  ngOnInit(): void {

    
  }
  onSelect(skill:SKILL): void {
    this.selectedSkill = skill;
  }
  openModal(){
    if(this.percentage == null) return
    this.percentage.nativeElement.classList.add("active");
    this.overlay.nativeElement.classList.add("active");
    

  }
  closeModal() {
    if(this.percentage == null) return
    this.percentage.nativeElement.classList.remove("active");
    this.overlay.nativeElement.classList.remove("active");
  }


}
