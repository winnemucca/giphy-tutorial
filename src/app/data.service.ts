import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { WelcomeList } from './welcome/welcome.model';
import sampleData from './assets/sample.json';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  sampleData = sampleData;
  constructor() { }
    createDb() {
      this.sampleData.map((item, index) => Object.assign(item, {id: index}));

      const  list: WelcomeList[] = JSON.parse(JSON.stringify(this.sampleData).replace(/\s(?=\w+":)/g, ''));

      return {list};

    }
}
