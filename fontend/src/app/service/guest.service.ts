import { Injectable } from '@angular/core';
import { Guest } from '../model/guest.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  addGuest(guest: Guest ) {
    console.log('Made it to service ready to user to GO', guest);
    console.log(environment.gateway + 'postRSVP', guest);

    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(environment.gateway + 'postRSVP', guest, HttpOptions);
  }

  giveYourWifeXMooches(numMooches: number, moochesGiven: number, wifeHasReceivedEnoughMooches: boolean) {
    console.log('Will be giving my wife ' + numMooches + ' mooches!!');
    moochesGiven = 0;
    while (numMooches > moochesGiven) {
      console.log('Mooch...');
      if (wifeHasReceivedEnoughMooches === false) {
        console.log('I must satisfy my wife and give her more mooches...');
        numMooches++;
      }
      moochesGiven ++;
      console.log('Will be mooching my wife ' + (numMooches - moochesGiven) + ' more times!!');
    }
  }

}


