import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { WelcomeList } from '../welcome/welcome.model';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        UserListComponent ],
      imports: [
        FontAwesomeModule,
        FormsModule, ReactiveFormsModule,
        ModalModule.forRoot()
      ],
      providers: [
        BsModalRef,
        BsModalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateUser', () => {
    xit('should emit user info', () => {
      const user: WelcomeList = {
        id: 1,
        FirstName: 'ben',
        LastName: 'ten',
        EmailAddress: 'test@gmail'
      };
      const EmailAddress = component.myForm.controls.EmailAddress;
      EmailAddress.setValue('t@gmail.com');
      const FirstName = component.myForm.controls.FirstName;
      FirstName.setValue('bem');
      const listItemSpy = spyOn(component.listItemUpdate, 'emit');
      // spyOn((component), 'createForm').and.callFake({of(user)});

      component.updateUser();

      expect(listItemSpy).toHaveBeenCalled();
    });
  });
});
