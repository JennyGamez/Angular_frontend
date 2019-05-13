import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetTokenPassComponent } from './reset-token-pass.component';

describe('ResetTokenPassComponent', () => {
  let component: ResetTokenPassComponent;
  let fixture: ComponentFixture<ResetTokenPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetTokenPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetTokenPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
