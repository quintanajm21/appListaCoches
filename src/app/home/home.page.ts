import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cars:any;

  constructor(private httpClient:  HttpClient) {
    this.cars = this.httpClient.get('https://desktop/daw/HLC/MOCK_DATA.json') ;

  }
}
