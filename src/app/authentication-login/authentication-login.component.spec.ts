import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationLoginComponent } from './authentication-login.component';

describe('AuthenticationLoginComponent', () => {
  let component: AuthenticationLoginComponent;
  let fixture: ComponentFixture<AuthenticationLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
