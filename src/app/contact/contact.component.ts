import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@ViewChild('success') success: ElementRef;
myForm: FormGroup;
loading = false;
successful = false
  constructor(private fb: FormBuilder,
    private store:AngularFirestore) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['',[
        Validators.required,
        Validators.minLength(2)
      ]],
      lastName: ['',[
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      message: ['',[
        Validators.required,
        Validators.minLength(3)
      ]]
    })



    this.myForm.valueChanges.subscribe();
  }
  get firstName() {
    return this.myForm.get('firstName');
  }
  get lastName() {
    return this.myForm.get('lastName');
  }
  get email() {
    return this.myForm.get('email');
  }
  get message() {
    return this.myForm.get('message');
  }

 async createMessage(){
   this.loading = true;

   const formValue = this.myForm.value;

   try{
    await this.store.collection('contacts').add(formValue);
    this.successful = true;
    this.success.nativeElement.classList.add('active');
    setTimeout(() =>{
      this.success.nativeElement.classList.remove('active');
      this.myForm.reset();
    },3000);
   } catch (err) {
    console.error(err);
   }
   this.loading = false;
  }

}
