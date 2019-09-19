import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guest } from '../../model/guest.model';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})

@Input('guest')
export class RsvpFormComponent implements OnInit {
  guest: FormGroup;

  constructor(fb: FormBuilder) {
    this.guest = fb.group({
      attending: false,
      name: ['Phill', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
      email: ['Phill@gmail.com', [Validators.required, Validators.email]],
      message: ['Congrats', Validators.maxLength(500)],
      cocktail: ['None'],
    });
    console.log('Form started: ', this.guest);
   }

   public hasError = (controlName: string, errorName: string) => {
    return this.guest.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    console.log('form loaded');
  }

  public onSubmitRSVP() {

    if (this.guest.valid) {
      this.executeGuestCreation(this.guest.value);
    } else {
      console.log('Here is the User RSVP data: ', this.guest.value);
    }
  }

 private executeGuestCreation = (guestFormValue) => {
  console.log('Here is the User RSVP data: ', guestFormValue);

  const guest: Guest = {
        attending: guestFormValue.attending,
        name: guestFormValue.name,
        email: guestFormValue.email,
        message: guestFormValue.message,
        cocktail: guestFormValue.cocktail
      };

      // call service to API hand off with Guest

  }



}
