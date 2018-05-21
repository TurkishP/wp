import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageShareComponent } from './my-page-share.component';

describe('MyPageShareComponent', () => {
  let component: MyPageShareComponent;
  let fixture: ComponentFixture<MyPageShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPageShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPageShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
