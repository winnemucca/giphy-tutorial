import { Component, Input, AfterViewInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WelcomeList } from '../welcome/welcome.model';
import { faUserMinus, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {
  faUserMinus = faUserMinus;
  faUserEdit = faUserEdit;
  modalRef: BsModalRef;
  myForm: FormGroup;
  userId: number;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService) {}

  @Input() list: WelcomeList[] = [];

  @Output()
  listItemUpdate = new EventEmitter<WelcomeList>();
  @Output() listItemDelete = new EventEmitter<WelcomeList[]>();

  ngAfterViewInit(): void {
  }

  deleteUser(user: WelcomeList[]): void {
    this.listItemDelete.emit(user);
  }

  updateUser(): void {
    const user: WelcomeList = {
      FirstName: this.myForm.controls.FirstName.value,
      LastName: this.myForm.controls.LastName.value,
      EmailAddress: this.myForm.controls.EmailAddress.value,
      id: this.userId
    };
    this.listItemUpdate.emit(user);
    this.modalRef.hide();
  }

  openModalComponent(template: TemplateRef<any>, user: WelcomeList): void {
    this.createForm(user);
    this.modalRef = this.modalService.show(template);
  }

  private createForm(user: WelcomeList ) {
    // todo fix casing style for user
    this.userId = user.id;
    this.myForm = this.formBuilder.group({
      FirstName: new FormControl(user.FirstName, [Validators.required, Validators.minLength(1)]),
      LastName: new FormControl(user.LastName, [Validators.required, Validators.minLength(1)]),
      EmailAddress: new FormControl(user.EmailAddress, [Validators.required, Validators.email])
    });
  }

}
