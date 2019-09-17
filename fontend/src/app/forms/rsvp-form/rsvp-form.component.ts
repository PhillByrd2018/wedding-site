import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
      name: ['Phill'],
      email: ['Phill@gmail.com'],
      message: ['Congrats'],
      cocktail: [''],
    });
    console.log('Form started: ', this.guest);
   }

  ngOnInit() {
    console.log('form loaded');
  }

  onSubmitRSVP() {
    console.log('Here is the User RSVP data: ', this.guest.value );
  }

}
