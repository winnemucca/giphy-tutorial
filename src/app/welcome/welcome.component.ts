import { Component, OnInit } from '@angular/core';
import { WelcomeList } from './welcome.model';
import { WelcomeService } from '../welcome.service';
import { faUserMinus, faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcomelist: WelcomeList[] = [];
  faUserMinus = faUserMinus;
  faUserEdit = faUserEdit;
  constructor(private welcomeService: WelcomeService) { }

  ngOnInit() {
    this.getWelcomeList();
  }

  getWelcomeList() {
    this.welcomeService.getList().subscribe( (list: WelcomeList[]) => {
      this.welcomelist = list;
    });
  }

  updateWelcomeListUser($event): void {
    this.welcomeService.updateListUser($event).subscribe( () => {
      return this.getWelcomeList();
    });
  }

  deleteWelcomeListUser($event): void {
    this.welcomeService.deleteListUser($event.id).subscribe( () => {
      return this.getWelcomeList();
    });
  }

}
