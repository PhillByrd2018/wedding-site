import { Injectable } from '@angular/core';
import { Guest } from '../model/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor() { }

  addGuest(guest: Guest ) {
    console.log('Made it to service ready to user to GO', guest);
    
  }
}


